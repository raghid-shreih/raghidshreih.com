import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock, Linkedin, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { blogPosts, formatDate } from "@/data/blogPosts";

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
                <Link href={`/blog/${post.id}`}>
                  <div className="rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/20 transition-all duration-300 p-6 md:p-8 cursor-pointer">
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

                      <span
                        className="flex items-center gap-1 text-sm text-primary font-medium group-hover:underline"
                        data-testid={`link-blog-read-${post.id}`}
                      >
                        Read
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
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
