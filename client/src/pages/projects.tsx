import { motion } from "framer-motion";
import { ExternalLink, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: "ai-commercialization",
    title: "AI Technology Commercialization at HBKU",
    company: "HBKU",
    period: "2025 – Present",
    description: "Leading the commercialization of AI-driven technologies including LLMs, NLP platforms, and decision systems. Designed proof-of-concept and pilot programs for organizations like Qatar Airways, Mowasalat, the Ministry of Justice, and the National Cyber Security Agency.",
    tags: ["AI/ML", "LLMs", "NLP", "Commercialization", "Government"],
    impact: "Multiple pilot deployments across Qatar's largest organizations",
  },
  {
    id: "shopify-apple",
    title: "Enterprise Platform Migrations",
    company: "Shopify",
    period: "2021 – 2025",
    description: "Led complex technical programs to migrate some of the world's leading brands — including Apple, Supreme, and Everlane — from Salesforce, Adobe, and custom commerce stacks to Shopify. These weren't simple replatforms; they required deep technical solutioning across payments, fulfillment, internationalization, and custom integrations.",
    tags: ["E-Commerce", "Enterprise", "Migrations", "Integrations"],
    impact: "Over $600M in GMV contributed across migrations",
  },
  {
    id: "google-ip3",
    title: "Google IP3 Patent Program",
    company: "Google",
    period: "2015 – 2016",
    description: "Managed Google's participation in the Industry Patent Purchase Promotion (IP3) program — a groundbreaking initiative where Google invited patent holders to offer their patents for purchase. Led the evaluation, acquisition, and licensing of 56 patent families with a total budget of $5.3 million.",
    tags: ["Patents", "IP Strategy", "Acquisitions", "Analytics"],
    impact: "56 patent families acquired and licensed ($5.3M budget)",
  },
  {
    id: "google-enterprise",
    title: "Enterprise Software Development",
    company: "Google",
    period: "2016 – 2018",
    description: "Led a team of software engineers building a complex enterprise software system. Managed end-to-end program execution including planning, resourcing, dependencies, risk management, and KPI tracking. Built SQL-based dashboards for business analysts to monitor program performance.",
    tags: ["Software Engineering", "Program Management", "Agile", "SQL"],
    impact: "Successful delivery of enterprise platform with full Agile adoption",
  },
  {
    id: "aramco-tech",
    title: "Technology Commercialization Programs",
    company: "Aramco",
    period: "2019 – 2021",
    description: "Led early-stage technology programs from research labs to commercial deployment at the world's most valuable company. Developed IP commercialization plans, managed pilot projects, and negotiated technology collaboration agreements across diverse technology domains.",
    tags: ["Oil & Gas", "Deep Tech", "IP Licensing", "Pilots"],
    impact: "Multiple technologies moved from lab to commercial deployment",
  },
  {
    id: "sdtc-investment",
    title: "Clean Technology Investment Portfolio",
    company: "SDTC",
    period: "2018 – 2019",
    description: "Led the investment of nearly $15 million into early-stage clean technology ventures. Evaluated 50+ companies across technology readiness, IP strength, market opportunity, and team capability. Presented investment recommendations to SDTC's executive committee of senior industry leaders.",
    tags: ["CleanTech", "Investment", "Due Diligence", "VC"],
    impact: "Nearly $15M deployed into promising clean technology startups",
  },
  {
    id: "kaust-portfolio",
    title: "KAUST Technology Portfolio",
    company: "KAUST",
    period: "2012 – 2015",
    description: "Managed a portfolio of 80+ technologies and 190+ patents spanning electronics, semiconductors, sensors, thermoelectric devices, MEMS, Smart Cities, and Oil & Gas exploration. Developed a new proof-of-concept funding program and negotiated complex licensing agreements.",
    tags: ["Semiconductors", "MEMS", "Smart Cities", "IP Management"],
    impact: "190+ patents managed, new PoC funding program established",
  },
  {
    id: "webhostingseeker",
    title: "WebHostingSeeker.com",
    company: "Self-Founded",
    period: "2000 – 2006",
    description: "Built a web hosting comparison platform from the ground up using PHP/MySQL, HTML, and CSS. The platform allowed website owners to search for and compare web hosting plans. Successfully grew the platform, promoted it to hosting companies and clients, and eventually sold the business in 2006.",
    tags: ["PHP", "MySQL", "Entrepreneurship", "Web Development"],
    impact: "Built, grew, and successfully exited a bootstrapped web platform",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold" data-testid="text-projects-title">
              Key{" "}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              The most exciting and impactful projects from across my career — from AI commercialization 
              to enterprise platform migrations to patent strategy.
            </p>
          </motion.div>

          <div className="space-y-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group"
                data-testid={`card-project-${project.id}`}
              >
                <div className="rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/20 transition-all duration-300 overflow-hidden">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="md:col-span-2 p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {project.company}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{project.period}</span>
                      </div>

                      <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-primary/5 text-primary text-xs font-medium border border-primary/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <Lightbulb size={14} className="text-primary" />
                        <span className="text-muted-foreground font-medium">{project.impact}</span>
                      </div>
                    </div>

                    <div className="md:border-l border-t md:border-t-0 border-border/30 flex items-center justify-center p-8 bg-gradient-to-br from-primary/5 to-blue-400/5">
                      <div className="text-center">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                          <ExternalLink className="w-6 h-6 text-primary" />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Video walkthrough<br />coming soon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
