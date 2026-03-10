import { Link } from "wouter";
import { Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <span className="font-heading text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Raghid Shreih
            </span>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Technology & Innovation Leader with 20+ years of experience transforming ideas into impactful solutions.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {[
                { href: "/about", label: "About Me" },
                { href: "/resume", label: "Resume" },
                { href: "/projects", label: "Key Projects" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="block text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/raghid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-linkedin"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <Link href="/contact">
                <span className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-contact">
                  <Mail size={16} />
                  Get in Touch
                </span>
              </Link>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={16} />
                Doha, Qatar
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Raghid Shreih. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
