import { motion } from "framer-motion";
import { ExternalLink, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: "ai-commercialization",
    title: "AI Technology Commercialization at HBKU",
    company: "HBKU",
    period: "2025 – Present",
    description: "Leading the commercialization of AI-driven technologies (LLMs, AI safety, applied AI), translating research into deployable solutions through structured TRL progression, building industry partnerships, and pilot deployments. Driving product–market fit, developing prototypes, and structuring licensing and collaboration agreements to enable real-world adoption. Partnered with some of the largest enterprise and government entities in the country.",
    tags: ["AI/ML", "LLMs", "Artificial Intelligence", "Enterprise", "Commercialization"],
    impact: "Multiple technology deployments across Qatar's largest organizations",
  },
  {
    id: "shopify-apple",
    title: "Enterprise Platform Migrations",
    company: "Shopify",
    period: "2021 – 2025",
    description: "Led enterprise-scale commerce transformation programs for global brands including Apple, Supreme, and Everlane, migrating from Salesforce, Adobe, and custom-built tech stacks to Shopify. Directed end-to-end solution architecture across payments, fulfillment, internationalization, and complex integrations, enabling scalable, high-performance commerce operations.",
    tags: ["E-Commerce", "Enterprise", "Migrations", "Integrations", "Solution Engineering"],
    impact: "Over $600M in GMV contributed to Shopify",
  },
  {
    id: "google-ip3",
    title: "Google IP3 Patent Purchase Program",
    company: "Google",
    period: "2015 – 2016",
    description: "Led Google’s participation in the Industry Patent Purchase Program (IP3), managing the evaluation, acquisition, and licensing of 56 patent families with a $5.3M budget. Drove IP investment decisions to strengthen Google’s patent portfolio in alignment with the company's IP strategy. Negotiated with leading technology companies including Microsoft, IBM, and Cisco to maximize strategic value for Google.",
    tags: ["Patents", "IP Strategy", "Licensing", "Analytics"],
    impact: "56 patent families acquired and licensed ($5.3M budget)",
  },
  {
    id: "google-enterprise",
    title: "Enterprise Software Development",
    company: "Google",
    period: "2016 – 2018",
    description: "Led a team of software engineers to deliver a complex enterprise software system, managing end-to-end program execution across planning, resourcing, dependencies, risk management, and performance tracking. Enabled data-driven decision-making by developing SQL-based dashboards to monitor program KPIs and operational performance.",
    tags: ["Software Engineering", "Program Management", "Agile", "SQL"],
    impact: "Successful delivery of enterprise software platform",
  },
  {
    id: "aramco-tech",
    title: "Technology Commercialization Programs",
    company: "Aramco",
    period: "2019 – 2021",
    description: "Led early-stage technology programs from research to deployment at Saudi Aramco, advancing technologies through validation, pilot projects, and industry adoption. Developed IP commercialization strategies and negotiated technology collaboration agreements to enable real-world deployment.",
    tags: ["Oil & Gas", "Deep Tech", "IP Licensing", "Commercialization"],
    impact: "Advancing early stage technology from research lab to deployment",
  },
  {
    id: "sdtc-investment",
    title: "Clean Technology Investment Portfolio",
    company: "SDTC",
    period: "2018 – 2019",
    description: "Led the investment of nearly $15 million into early-stage clean technology ventures. Evaluated 50+ companies across technology readiness, IP strength, market opportunity, and team capability. Presented investment recommendations to SDTC's executive committee of senior industry leaders.",
    tags: ["CleanTech", "Investment", "Due Diligence", "VC"],
    impact: "$15M deployed into promising clean technology startups",
  },
  {
    id: "kaust-portfolio",
    title: "KAUST Technology Portfolio",
    company: "KAUST",
    period: "2012 – 2015",
    description: "Managed a portfolio of 80+ technologies and 190+ IP assets across deep tech domains  including electronics, semiconductors, MEMS, sensors, thermoelectric devices, Smart Cities, and Oil & Gas exploration. Designed and launched a proof-of-concept funding program to advance technologies toward market readiness, and negotiated complex licensing agreements with industry partners.",
    tags: ["Semiconductors", "MEMS", "Smart Cities", "IP Management"],
    impact: "Launched a new PoC funding program, and managed 80+ technologies and 190+ IP assets",
  },
  {
    id: "cipo",
    title: "Computer Patent Policy Development",
    company: "Canadian Intellectual Property Office (CIPO)",
    period: "2009-2010",
    description: "Led a CIPO initiative to update examination policy for computer-implemented inventions, leading cross-functional discussions, managing stakeholder consultations, and delivering the project on schedule.",
    tags: ["Patents", "Policy Development", "Project Management"],
    impact: "Updated Canada's patent policy on computer-implemented inventions",
  },
  {
    id: "webhostingseeker",
    title: "Web Hosting Directory",
    company: "Self-Founded",
    period: "2000 – 2006",
    description: "Founded and built a web hosting comparison platform from the ground up using PHP/MySQL, HTML, and CSS, enabling users to search and compare hosting providers. Grew the platform through partnerships and targeted promotion to hosting companies and customers, culminating in a successful exit.",
    tags: ["PHP", "MySQL", "Entrepreneurship", "Web Development"],
    impact: "Built, grew, and successfully exited a bootstrapped web platform",
  },
  {
    id: "idealhosting",
    title: "Web Hosting Provider",
    company: "Self-Founded",
    period: "2000 – 2003",
    description: "Founded and built a web hosting services company, providing shared hosting and value-added services including website development, maintenance, and custom database-driven and e-commerce solutions. Grew the business to serve 100+ clients before successfully exiting.",
    tags: ["Web Hosting", "Linux", "Entrepreneurship"],
    impact: "Built, grew, and successfully exited a bootstrapped web platform",
  },
  {
    id: "zarlink",
    title: "TFO Messaging in 3G data steams",
    company: "Zarlink Semiconductor",
    period: "2002",
    description: "As an intern at Zarlink, I designed and implemented an embedded C software solution to detect and monitor Tandem Free Operation (TFO) channels within 3G data streams. I developed a MATLAB-based test environment to generate synthetic data streams with embedded TFO messages for validation. Once the solution was verified, I implemented it in Verilog HDL for deployment in an FPGA. I verified the RTL design using VCS simulation, Virsim waveform analysis, and coverage metrics. This project was a formative experience where I was given ownership of a complex project and I delivered!",
    tags: ["Software", "FPGA", "Engineering"],
    impact: "Delivered a full end-to-end engineering solution to a complex problem",
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
