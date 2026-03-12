import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, GraduationCap, Lightbulb, ChevronDown, MessageCircle } from "lucide-react";
import { SiGoogle, SiShopify } from "react-icons/si";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "20+", label: "Years in Tech Leadership" },
  { value: "4", label: "Countries Worked In" },
  { value: "Millions $USD", label: "Managed and Invested" },
  { value: "190+", label: "Patents Managed" },
];

const highlights = [
  {
    icon: <SiGoogle className="w-5 h-5" />,
    company: "Google",
    role: "Program Manager & Technical Advisor",
    description: "Led engineering teams and patent strategy at one of the world's most innovative companies.",
  },
  {
    icon: <SiShopify className="w-5 h-5" />,
    company: "Shopify",
    role: "Staff TPM & Solutions Engineer",
    description: "Delivered enterprise solutions for Apple, Supreme, and Everlane. Drove $600M+ in GMV.",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    company: "Aramco",
    role: "Technology Commercialization Lead",
    description: "Transformed early-stage research into commercial deployments for the world's largest energy company.",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    company: "HBKU",
    role: "Research Commercialization Manager",
    description: "Commercializing AI-driven technologies and managing programs with Qatar's largest organizations.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-blue-500/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]" data-testid="text-hero-title">
              <span className="text-foreground">Hi, I'm </span>
              <span className="bg-gradient-to-r from-primary via-blue-500 to-blue-400 bg-clip-text text-transparent">
                Raghid
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
              Technology & Innovation Leader with 20+ years turning big ideas into real-world impact.
              I've shipped products at <span className="text-foreground font-medium">Google</span>,
              scaled platforms at <span className="text-foreground font-medium">Shopify</span>,
              and commercialized deep tech at <span className="text-foreground font-medium">Aramco</span>.
              Now I'm helping build Qatar's AI future at <span className="text-foreground font-medium">HBKU</span>.
            </p>

            <p className="mt-4 text-base text-muted-foreground/80 max-w-lg mx-auto italic">
              Also, I make a mean cup of Cappuccino. Priorities. ☕
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/resume">
                <Button size="lg" className="gap-2 px-8 text-base" data-testid="button-view-resume">
                  View My Resume
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/interview">
                <Button size="lg" variant="secondary" className="gap-2 px-8 text-base" data-testid="button-interview-raghid">
                  Interview Raghid!
                  <MessageCircle size={18} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="gap-2 px-8 text-base" data-testid="button-get-in-touch">
                  Let's Talk
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/80 backdrop-blur-sm shadow-xl">
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-primary/10 to-blue-400/10">
                <div className="text-center px-8">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Video introduction coming soon — stay tuned!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex justify-center mt-12"
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-border/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            {...fadeInUp}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="font-heading text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent whitespace-nowrap">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold" data-testid="text-career-highlights">
              Career Highlights
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              A journey through some of the world's most impactful technology companies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group p-6 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/20 transition-all duration-300"
                data-testid={`card-highlight-${item.company.toLowerCase()}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-foreground">
                      {item.company}
                    </h3>
                    <p className="text-sm text-primary font-medium mt-0.5">
                      {item.role}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/resume">
              <Button variant="outline" className="gap-2" data-testid="button-full-journey">
                See Full Journey
                <ArrowRight size={16} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold" data-testid="text-cta-title">
              Looking for a Technology Leader?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Whether you need someone to lead your next big program, commercialize emerging tech,
              or bridge the gap between engineering and business — let's chat.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2 px-8" data-testid="button-hire-me">
                  Get in Touch
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <a
                href="https://www.linkedin.com/in/raghid"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="gap-2 px-8" data-testid="button-linkedin-cta">
                  View LinkedIn
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
