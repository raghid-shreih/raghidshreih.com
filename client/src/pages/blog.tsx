import { motion } from "framer-motion";
import { Calendar, ArrowUpRight, Clock, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: "ai-commercialization-qatar",
    title: "Bridging the Gap: From AI Research to Real-World Impact in Qatar",
    excerpt: "How Qatar's research institutions are turning cutting-edge AI into practical solutions for government and enterprise. My experience working with the Ministry of Justice, NCSA, and Qatar Airways on AI adoption.",
    date: "2026-02-15",
    readTime: "6 min read",
    tags: ["AI", "Qatar", "Innovation"],
    source: "linkedin",
  },
  {
    id: "enterprise-migrations",
    title: "What I Learned Migrating Apple to Shopify",
    excerpt: "Leading one of the most high-profile e-commerce platform migrations taught me that technology is only 30% of the challenge. The other 70% is people, process, and trust. Here's what I mean.",
    date: "2025-06-20",
    readTime: "8 min read",
    tags: ["E-Commerce", "Leadership", "Shopify"],
    source: "linkedin",
  },
  {
    id: "tech-commercialization",
    title: "The Valley of Death: Why Great Technology Fails to Reach the Market",
    excerpt: "After years of working in technology commercialization at Aramco, KAUST, and HBKU, I've seen the same patterns over and over. Here are the three biggest reasons promising technology never makes it to market — and how to avoid them.",
    date: "2025-03-10",
    readTime: "7 min read",
    tags: ["Commercialization", "Startups", "Strategy"],
    source: "linkedin",
  },
  {
    id: "patent-strategy",
    title: "Patent Strategy Isn't Just for Lawyers: A Tech Leader's Perspective",
    excerpt: "From my time at Google managing patent acquisitions worth $5.3M to negotiating licensing deals at KAUST, I've learned that patent strategy is a core business function. Here's why every tech leader should care about IP.",
    date: "2024-11-05",
    readTime: "5 min read",
    tags: ["IP Strategy", "Patents", "Google"],
    source: "linkedin",
  },
  {
    id: "startup-mentorship",
    title: "5 Things I Tell Every Startup Founder (That They Don't Want to Hear)",
    excerpt: "As a WIPO IP mentor and startup competition judge, I've worked with hundreds of founders. The advice that matters most is rarely about the product — it's about the market, the team, and the timing.",
    date: "2024-08-22",
    readTime: "6 min read",
    tags: ["Startups", "Mentorship", "Entrepreneurship"],
    source: "linkedin",
  },
  {
    id: "agile-real-world",
    title: "Agile Beyond Software: Applying Scrum to Technology Commercialization",
    excerpt: "Most people think Agile is only for software development. I've successfully applied Scrum and Kanban methodologies to patent licensing, technology pilots, and investment due diligence. Here's how.",
    date: "2024-05-15",
    readTime: "5 min read",
    tags: ["Agile", "Program Management", "Innovation"],
    source: "linkedin",
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold" data-testid="text-blog-title">
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Thoughts on technology leadership, innovation, commercialization, and lessons 
              learned from 20+ years in the trenches.
            </p>
          </motion.div>

          <div className="space-y-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group"
                data-testid={`card-blog-${post.id}`}
              >
                <div className="rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/20 transition-all duration-300 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar size={13} />
                      {formatDate(post.date)}
                    </div>
                    <span className="text-border">•</span>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock size={13} />
                      {post.readTime}
                    </div>
                    {post.source === "linkedin" && (
                      <>
                        <span className="text-border">•</span>
                        <div className="flex items-center gap-1.5 text-xs text-blue-500">
                          <Linkedin size={13} />
                          LinkedIn
                        </div>
                      </>
                    )}
                  </div>

                  <h2 className="font-heading font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <a
                      href="https://www.linkedin.com/in/raghid"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                      data-testid={`link-blog-read-${post.id}`}
                    >
                      Read
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://www.linkedin.com/in/raghid"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
              data-testid="link-linkedin-more-posts"
            >
              <Linkedin size={16} />
              See more posts on LinkedIn
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
