import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { contactMessageSchema } from "@shared/schema";

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

  return httpServer;
}
