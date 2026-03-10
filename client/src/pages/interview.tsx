import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, MessageCircle, AlertTriangle, Bot, User, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const suggestedQuestions = [
  "What's your current role?",
  "Tell me about your time at Google",
  "What's your experience with AI?",
  "What companies have you worked for?",
  "What are your technical skills?",
  "Tell me about a key project you're proud of",
];

export default function Interview() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hey there! I'm Raghid's AI twin. Ask me anything about his career, experience, skills, or projects. I'll answer based on what's on this website. Just don't ask me about the weather — I'm not that kind of chatbot. 😄",
    },
  ]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  const sendMessage = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText || isStreaming) return;

    const userMessage: Message = { role: "user", content: messageText };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsStreaming(true);

    const assistantMessage: Message = { role: "assistant", content: "" };
    setMessages([...updatedMessages, assistantMessage]);

    try {
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      const response = await fetch("/api/interview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages
            .filter((m) => m.content)
            .map((m) => ({ role: m.role, content: m.content })),
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || "Request failed");
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error("No reader");

      const decoder = new TextDecoder();
      let buffer = "";
      let fullContent = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          try {
            const event = JSON.parse(line.slice(6));
            if (event.error) {
              throw new Error(event.error);
            }
            if (event.content) {
              fullContent += event.content;
              setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                  role: "assistant",
                  content: fullContent,
                };
                return updated;
              });
            }
            if (event.done) break;
          } catch (e) {
            if (e instanceof Error && e.message !== "Request failed") throw e;
          }
        }
      }
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return;
      const errorMsg = err instanceof Error && err.message.includes("Too many")
        ? "Slow down a bit! Too many messages. Wait a moment and try again."
        : "Oops, something went wrong. Try asking again!";
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: errorMsg,
        };
        return updated;
      });
    } finally {
      abortRef.current = null;
      setIsStreaming(false);
      inputRef.current?.focus();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "Hey there! I'm Raghid's AI twin. Ask me anything about his career, experience, skills, or projects. I'll answer based on what's on this website. Just don't ask me about the weather — I'm not that kind of chatbot. 😄",
      },
    ]);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold" data-testid="text-interview-title">
              Interview{" "}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Raghid
              </span>
            </h1>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto text-sm">
              Chat with an AI version of Raghid. Ask about his career, skills, projects, or experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mb-6 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3"
            data-testid="disclaimer-banner"
          >
            <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-600 dark:text-amber-400 leading-relaxed">
              <strong>Disclaimer:</strong> This feature is automated and powered by AI. Raghid Shreih is not responsible for any false, harmful, or misleading information generated by this chatbot. Responses are based on publicly available information from this website and may not be fully accurate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="rounded-2xl border border-border/50 bg-card/50 overflow-hidden flex flex-col"
            style={{ height: "calc(100vh - 340px)", minHeight: "400px" }}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-border/50 bg-card/80">
              <div className="flex items-center gap-2">
                <MessageCircle size={16} className="text-primary" />
                <span className="text-sm font-medium">Chat with Raghid</span>
              </div>
              <button
                onClick={clearChat}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                data-testid="button-clear-chat"
                title="Clear chat"
              >
                <Trash2 size={14} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  data-testid={`message-${msg.role}-${i}`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      msg.role === "assistant"
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {msg.role === "assistant" ? <Bot size={16} /> : <User size={16} />}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted/50 border border-border/50 text-foreground"
                    }`}
                  >
                    {msg.content.split("\n").map((line, j) => (
                      <span key={j}>
                        {renderBold(line)}
                        {j < msg.content.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                    {isStreaming && i === messages.length - 1 && msg.role === "assistant" && (
                      <span className="inline-block w-1.5 h-4 bg-primary/60 animate-pulse ml-0.5 align-middle" />
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {messages.length <= 1 && (
              <div className="px-5 pb-3">
                <p className="text-xs text-muted-foreground mb-2">Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/10 text-xs text-primary hover:bg-primary/10 transition-colors"
                      data-testid={`button-suggestion-${q.substring(0, 20).replace(/[^a-z0-9]/gi, '-').toLowerCase()}`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="px-4 py-3 border-t border-border/50 bg-card/80">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className="flex items-center gap-2"
                data-testid="form-interview-chat"
              >
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Raghid something..."
                  className="flex-1 bg-background/50"
                  disabled={isStreaming}
                  data-testid="input-interview-message"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isStreaming || !input.trim()}
                  data-testid="button-send-message"
                >
                  {isStreaming ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function renderBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}
