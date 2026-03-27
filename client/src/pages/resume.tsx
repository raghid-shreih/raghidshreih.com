import { motion } from "framer-motion";
import { Download, FileText, ExternalLink, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type TimelineEntry = {
  id: string;
  company: string;
  location: string;
  roles: {
    title: string;
    period: string;
    bullets: string[];
  }[];
  color: string;
};

const experience: TimelineEntry[] = [
  {
    id: "hbku",
    company: "Hamad Bin Khalifa University",
    location: "Doha, Qatar",
    roles: [
      {
        title: "Research Commercialization Manager",
        period: "Jun 2025 – Present",
        bullets: [
          "Led commercialization of AI-driven technologies from research through proof-of-concept, prototyping, pilot deployments, and commercial deployment through licensing or spinouts",
          "Acted as a strategic interface between researchers, industry partners, startups, and legal/IP teams to translate deep tech into market-ready solutions",
          "Evaluated technology readiness levels (TRLs) for emerging AI research and defined technical and commercial roadmaps",
          "Translated complex AI research (LLMs, NLP, data platforms, decision systems) into clear value propositions for non-technical stakeholders",
          "Managed complex technology implementation programs with government and enterprise customers",
        ],
      },
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "shopify",
    company: "Shopify",
    location: "Remote / Canada",
    roles: [
      {
        title: "Staff Technical Program Manager & Solution Engineer",
        period: "Jul 2021 – Aug 2025",
        bullets: [
          "Led complex technology implementation programs supporting Shopify's largest enterprise customers including Apple, Supreme, and Everlane",
          "Directed large-scale platform migrations from Salesforce, Adobe, and custom commerce stacks to Shopify, contributing over $600M in GMV",
          "Led enterprise pre-sales technical solutioning in support of strategic sales engagements",
          "Partnered directly with C-suite executives and senior leadership teams at global brands",
          "Coordinated cross-functional engineering teams for large integrations bridging Shopify, merchant, and 3rd party functionality",
        ],
      },
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "aramco",
    company: "Aramco",
    location: "Saudi Arabia",
    roles: [
      {
        title: "Technology Commercialization Lead",
        period: "2019 – 2021",
        bullets: [
          "Led early-stage technology programs from the research lab to internal and external commercial deployment",
          "Developed IP commercialization plans through market research to refine competitive advantage and go-to-market strategy",
          "Defined and managed pilot and demonstration projects in collaboration with multiple stakeholders",
          "Led strategic technology programs through formulating and presenting plans to senior management",
          "Negotiated technology collaboration and commercialization agreements",
        ],
      },
    ],
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "sdtc",
    company: "SDTC",
    location: "Canada",
    roles: [
      {
        title: "Technology Screening & Evaluation Manager",
        period: "2018 – 2019",
        bullets: [
          "Led successful investment of nearly $15M to support technology commercialization of early-stage clean technology projects",
          "Evaluated technology, IP, commercialization potential, management capacity, and market opportunity of 50+ companies",
          "Performed due diligence and prepared investment summaries for recommended opportunities",
          "Presented investment recommendations to SDTC's investment committee of senior industry executives",
        ],
      },
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "google",
    company: "Google",
    location: "San Francisco Bay Area",
    roles: [
      {
        title: "Program Manager",
        period: "Sep 2016 – Mar 2018",
        bullets: [
          "Led a team of software engineers developing a complex enterprise software system",
          "Developed project plans outlining milestones, dependencies and risks",
          "Coordinated efforts across product management, software engineering, testing and end users",
          "Managed resource planning and allocation for the Customer Engagement team",
          "Applied Agile methodologies including Scrum and Kanban",
        ],
      },
      {
        title: "Technical Advisor & Competitive Intelligence Analyst",
        period: "Apr 2015 – Sep 2016",
        bullets: [
          "Contributed to Google's strategy to protect, defend and capture the value of its patents",
          "Managed Google's IP3 program leading to acquisition and licensing of 56 patent families ($5.3M budget)",
          "Competitive intelligence research to guide patent acquisition and licensing strategy",
          "Patent landscaping to guide patenting strategy in key technology areas",
          "Represented Google's patent team at CES 2016",
        ],
      },
    ],
    color: "from-red-500 to-orange-500",
  },
  {
    id: "kaust",
    company: "KAUST",
    location: "Saudi Arabia",
    roles: [
      {
        title: "Technology Portfolio Manager",
        period: "2012 – 2015",
        bullets: [
          "Managed a portfolio of 80+ technologies, 190+ patents, and 25 agreements",
          "Portfolio spanned electronics, semiconductors, sensors, MEMS, Smart Cities and Oil & Gas",
          "Developed new proof-of-concept funding program with formal evaluation process",
          "Negotiated complex patent licensing and research collaboration agreements",
          "Delivered IP training to new employees and KAUST startups",
        ],
      },
    ],
    color: "from-purple-500 to-violet-500",
  },
  {
    id: "cipo",
    company: "Canadian IP Office",
    location: "Gatineau, Canada",
    roles: [
      {
        title: "Patent Examiner & Project Coordinator",
        period: "Jan 2007 – Sep 2012",
        bullets: [
          "Permanent member of the Patent Examination Practices Advisory Group (PEPAG)",
          "Led a project to revise office policy related to computer inventions",
          "Examined Canadian and PCT patent applications, writing examination reports",
          "Completed basic and advanced patent examination training including re-examination and litigation",
        ],
      },
    ],
    color: "from-pink-500 to-rose-500",
  },
];

const skills = {
  "Technical": [
    "JavaScript", "React", "Node.js", "Python", "PHP", "SQL",
    "REST APIs", "GraphQL", "Google Cloud Platform", "AI/ML",
    "VHDL", "Verilog", "FPGA Design",
  ],
  "Leadership": [
    "Technical Program Management", "Solutions Architecture",
    "Pre-Sales", "Stakeholder Management", "Agile/Scrum",
    "Cross-functional Leadership", "C-Level Engagement",
  ],
  "Business": [
    "Technology Commercialization", "Go-to-Market Strategy",
    "IP Strategy & Licensing", "Investment Due Diligence",
    "Product Strategy", "Business Development", "Startup Mentorship",
  ],
  "Tools & Platforms": [
    "Shopify", "Salesforce", "Adobe Commerce",
    "GitHub", "Replit", "Cursor", "Lovable",
    "Google Workspace", "JIRA",
  ],
};

const education = [
  { degree: "MBA (with Merit)", school: "University of Leicester", year: "2016" },
  { degree: "M.Sc. Electrical Engineering", school: "Carleton University", year: "2006" },
  { degree: "B.Sc. Computer Engineering", school: "University of Ottawa", year: "2002" },
];

const certifications = [
  "Certified Licensing Professional (CLP)",
  "Cloud Engineering with Google Cloud Specialization",
  "Data Engineering with Google Cloud Specialization",
];

export default function Resume() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold" data-testid="text-resume-title">
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Resume</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              20+ years of building, leading, and commercializing technology across the globe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-16"
          >
            <a href="/Raghid_Shreih_Resume.pdf" download>
              <Button variant="outline" className="gap-2" data-testid="button-download-pdf">
                <Download size={16} />
                Download PDF
              </Button>
            </a>
            <a href="/Raghid_Shreih_Resume.txt" download>
              <Button variant="outline" className="gap-2" data-testid="button-download-txt">
                <FileText size={16} />
                Download Text
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/raghid" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2" data-testid="button-view-linkedin">
                <ExternalLink size={16} />
                View LinkedIn
              </Button>
            </a>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-xl font-bold mb-8 flex items-center gap-2" data-testid="text-experience-heading">
                <Calendar size={20} className="text-primary" />
                Experience
              </h2>

              <div className="relative">
                <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-blue-400/20 to-transparent" />

                {experience.map((entry, i) => (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="relative pl-12 mb-6"
                    data-testid={`timeline-entry-${entry.id}`}
                  >
                    <div className={`absolute left-2.5 top-6 w-4 h-4 rounded-full bg-gradient-to-r ${entry.color} border-2 border-background z-10`} />

                    <div className="rounded-2xl border border-border/50 bg-card/50 overflow-hidden">
                      <div className="p-5">
                        <h3 className="font-heading font-bold text-lg">{entry.company}</h3>
                        <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                          <MapPin size={13} />
                          {entry.location}
                        </div>
                      </div>

                      <div className="px-5 pb-5 border-t border-border/30 pt-4 space-y-4">
                        {entry.roles.map((role) => (
                          <div key={role.title}>
                            <div className="flex items-baseline gap-2 mb-2">
                              <h4 className="text-base font-bold text-foreground">{role.title}</h4>
                              <span className="text-xs text-muted-foreground">({role.period})</span>
                            </div>
                            <ul className="space-y-2">
                              {role.bullets.map((bullet, j) => (
                                <li key={j} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0 mt-1.5" />
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-heading text-xl font-bold mb-6" data-testid="text-skills-heading">Skills</h2>
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="mb-6">
                    <h3 className="text-sm font-semibold text-primary mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs font-medium"
                          data-testid={`badge-skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-heading text-xl font-bold mb-6" data-testid="text-education-heading">Education</h2>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div
                      key={edu.degree}
                      className="p-4 rounded-xl border border-border/50 bg-card/50"
                      data-testid={`card-education-${edu.year}`}
                    >
                      <div className="font-medium text-sm">{edu.degree}</div>
                      <div className="text-xs text-muted-foreground mt-1">{edu.school}</div>
                      <div className="text-xs text-primary font-medium mt-1">{edu.year}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-heading text-xl font-bold mb-6" data-testid="text-certifications-heading">Certifications</h2>
                <div className="space-y-2">
                  {certifications.map((cert) => (
                    <div
                      key={cert}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                      data-testid={`text-cert-${cert.substring(0, 20).toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {cert}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-heading text-xl font-bold mb-6" data-testid="text-honors-heading">Honors & Awards</h2>
                <div className="space-y-2">
                  {[
                    "Ontario Graduate Scholarship (2003, 2004)",
                    "Graduate Studies Dean Entrance Scholarship (2003, 2004)",
                    "Golden Key Society Member",
                  ].map((award) => (
                    <div
                      key={award}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {award}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
