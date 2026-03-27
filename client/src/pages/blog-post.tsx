import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getBlogPost, formatDate } from "@/data/blogPosts";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:id");
  const post = params?.id ? getBlogPost(params.id) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold mb-4" data-testid="text-post-not-found">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button variant="outline" className="gap-2" data-testid="button-back-to-blog">
              <ArrowLeft size={16} />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const paragraphs = post.content.split("\n\n");

  return (
    <div className="min-h-screen pt-24 pb-16">
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/blog">
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer mb-8" data-testid="link-back-to-blog">
                <ArrowLeft size={14} />
                Back to Blog
              </span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6 mt-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={14} />
                {formatDate(post.date)}
              </div>
              <span className="text-border">•</span>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock size={14} />
                {post.readTime}
              </div>
            </div>

            <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6" data-testid="text-post-title">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-10">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>

          {post.videoUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-12"
            >
              <div className="rounded-2xl overflow-hidden border border-border/50 bg-card/80">
                <div className="aspect-video">
                  <iframe
                    src={post.videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={post.title}
                  />
                </div>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="prose-custom"
          >
            {paragraphs.map((paragraph, i) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;

              if (trimmed.startsWith("## ")) {
                return (
                  <h2 key={i} className="font-heading text-2xl font-bold mt-12 mb-4 text-foreground">
                    {trimmed.replace("## ", "")}
                  </h2>
                );
              }

              if (trimmed.startsWith("### ")) {
                return (
                  <h3 key={i} className="font-heading text-xl font-bold mt-8 mb-3 text-foreground">
                    {trimmed.replace("### ", "")}
                  </h3>
                );
              }

              if (trimmed.startsWith("- ") || trimmed.startsWith("1. ")) {
                const items = trimmed.split("\n").filter(Boolean);
                const isOrdered = trimmed.startsWith("1. ");
                const Tag = isOrdered ? "ol" : "ul";
                return (
                  <Tag key={i} className={`my-4 space-y-2 ${isOrdered ? "list-decimal" : "list-disc"} pl-6`}>
                    {items.map((item, j) => (
                      <li key={j} className="text-muted-foreground leading-relaxed text-[15px]">
                        {renderInlineFormatting(item.replace(/^(-|\d+\.)\s*/, ""))}
                      </li>
                    ))}
                  </Tag>
                );
              }

              if (trimmed.startsWith("**") && trimmed.includes("**") && trimmed.indexOf("—") > 0) {
                return (
                  <p key={i} className="text-muted-foreground leading-relaxed my-4 text-[15px]">
                    {renderInlineFormatting(trimmed)}
                  </p>
                );
              }

              return (
                <p key={i} className="text-muted-foreground leading-relaxed my-4 text-[15px]">
                  {renderInlineFormatting(trimmed)}
                </p>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-16 pt-8 border-t border-border/50"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link href="/blog">
                <Button variant="outline" className="gap-2" data-testid="button-back-to-blog-bottom">
                  <ArrowLeft size={16} />
                  All Posts
                </Button>
              </Link>

            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
}

function renderInlineFormatting(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-foreground font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
