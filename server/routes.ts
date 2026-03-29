import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { contactMessageSchema } from "@shared/schema";
import { z } from "zod";
import OpenAI from "openai";
import { RAGHID_SYSTEM_PROMPT } from "./raghidContext";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

const chatMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(2000),
});

const interviewRequestSchema = z.object({
  messages: z.array(chatMessageSchema).min(1).max(20),
});

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 15;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count++;
  return true;
}

setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now > entry.resetAt) {
      rateLimitMap.delete(ip);
    }
  }
}, 60_000);

const DAILY_REQUEST_CAP = 200;
let dailyRequestCount = 0;
let dailyResetAt = getNextMidnightUTC();

function getNextMidnightUTC(): number {
  const now = new Date();
  const midnight = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1));
  return midnight.getTime();
}

function checkDailyCap(): boolean {
  const now = Date.now();
  if (now >= dailyResetAt) {
    dailyRequestCount = 0;
    dailyResetAt = getNextMidnightUTC();
  }
  if (dailyRequestCount >= DAILY_REQUEST_CAP) {
    return false;
  }
  dailyRequestCount++;
  return true;
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const result = contactMessageSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({
          message: "Invalid form data",
          errors: result.error.flatten().fieldErrors,
        });
      }

      await storage.saveContactMessage(result.data);
      return res.status(200).json({ message: "Message received successfully" });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ message: "Failed to send message" });
    }
  });

  app.post("/api/interview", async (req, res) => {
    try {
      const clientIp = req.ip || req.socket.remoteAddress || "unknown";
      if (!checkRateLimit(clientIp)) {
        return res.status(429).json({ message: "Too many requests. Please wait a moment before trying again." });
      }
      if (!checkDailyCap()) {
        return res.status(503).json({ message: "RaghidBot has reached its daily limit. Please check back tomorrow!" });
      }

      const parsed = interviewRequestSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          message: "Invalid request",
          errors: parsed.error.flatten().fieldErrors,
        });
      }

      const { messages } = parsed.data;
      const recentMessages = messages.slice(-10);

      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Connection", "keep-alive");

      const stream = await openai.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: [
          { role: "system", content: RAGHID_SYSTEM_PROMPT },
          ...recentMessages,
        ],
        stream: true,
        max_completion_tokens: 2048,
      });

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content || "";
        if (content) {
          res.write(`data: ${JSON.stringify({ content })}\n\n`);
        }
      }

      res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
      res.end();
    } catch (error) {
      console.error("Interview chat error:", error);
      if (res.headersSent) {
        res.write(`data: ${JSON.stringify({ error: "Something went wrong. Please try again." })}\n\n`);
        res.end();
      } else {
        res.status(500).json({ message: "Failed to process message" });
      }
    }
  });

  return httpServer;
}
