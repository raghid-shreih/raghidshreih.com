import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Languages, Award, BookOpen, Heart, ChevronLeft, ChevronRight, Mic } from "lucide-react";
import photo1 from "@assets/PXL_20250903_112911066_1774267800023.jpg";
import photo2 from "@assets/original_a29b907a-b87c-44a9-9f3c-eed9fe81a55f_PXL_20251111_120_1774267800026.jpg";
import photo3 from "@assets/PXL_20250818_051316542.MP~2_1774267800027.jpg";
import photo4 from "@assets/IMG_20220408_072304474_HDR_1774267800027.jpg";
import photo5 from "@assets/PXL_20250820_054735799.MP_1774267800027.jpg";

const slides = [
  { src: photo1, alt: "Raghid at IP Management Clinics, Doha" },
  { src: photo2, alt: "Raghid at Web Summit" },
  { src: photo3, alt: "Raghid Shreih" },
  { src: photo4, alt: "Raghid at Google headquarters" },
  { src: photo5, alt: "Raghid enjoying a cappuccino" },
];

const journeyMilestones = [
  {
    year: "1998",
    title: "The Beginning",
    description: "Started my journey in Ottawa, Canada as a Computer Engineering student at the University of Ottawa, while simultaneously founding Ideal Hosting — a web development and hosting business serving 100+ clients. Built everything from scratch with PHP, MySQL, JavaScript, HTML, and CSS.",
  },
  {
    year: "2002",
    title: "Engineering Foundations",
    description: "Graduated with a B.Sc. in Computer Engineering and dove into the semiconductor world, designing ASICs at companies like Quake Technologies, Galazar Networks, and Zarlink Semiconductor. Also built and sold WebHostingSeeker.com, a platform connecting website owners with hosting providers.",
  },
  {
    year: "2006",
    title: "Advanced Studies",
    description: "Completed an M.Sc. in Electrical Engineering at Carleton University, researching multi-threshold asynchronous pipeline circuits. Applied my technical knowledge to examinining new inventions as a Patent Examiner at the Canadian Intellectual Property Office (CIPO).",
  },
  {
    year: "2012",
    title: "Going Global",
    description: "Moved to Saudi Arabia to manage KAUST's technology portfolio — 80+ technologies, 190+ patents, and 25 agreements spanning electronics, semiconductors, sensors, smart cities, and oil & gas. This is where my passion for technology commercialization truly ignited.",
  },
  {
    year: "2015",
    title: "The Google Years",
    description: "Joined Google in the San Francisco Bay Area. First as a Technical Advisor working on patent strategy and competitive intelligence, then as a Program Manager leading a team of software engineers building enterprise software. Represented Google at CES 2016 and led Google's participation in the Industry Patent Purchase Promotion (IP3) program leading to the acquisition and licensing of 56 patent families with a total budget of $5.3 million.",
  },
  {
    year: "2018",
    title: "Clean Tech & Investing",
    description: "Returned to Canada to lead investments at SDTC (Sustainable Development Technology Canada), deploying nearly $15M into early-stage clean technology ventures. Learned to evaluate companies from every angle including technology, IP, market, team, and financials.",
  },
  {
    year: "2019",
    title: "Energy & Innovation",
    description: "Joined Aramco as Technology Commercialization Lead, bridging the gap between cutting-edge research labs and real-world commercial deployment for the world's most valuable company. Then COVID hit and I had to return to Canada to be closer to family!",
  },
  {
    year: "2021",
    title: "E-Commerce at Scale",
    description: "Joined Shopify as a Staff Technical Program Manager with Shopify's Professional Services team. Led migrations for Apple, Supreme, and Everlane from platforms like Salesforce and Adobe, contributing over $600M in GMV to Shopify!",
  },
  {
    year: "2025",
    title: "Building Qatar's AI Future",
    description: "Now at Hamad Bin Khalifa University (HBKU) in Doha, Qatar, commercializing AI-driven technologies and managing technology collaboration programs with organizations including the Ministry of Justice, NCSA, Mowasalat, and Qatar Airways.",
  },
];

const personalFacts = [
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Global Citizen",
    description: "Lived and worked across Canada, USA, Saudi Arabia, and Qatar. Comfortable navigating diverse cultures and business environments.",
  },
  {
    icon: <Languages className="w-5 h-5" />,
    title: "Multilingual",
    description: "Native in English and Arabic, with working knowledge of French. Communication without borders.",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Certified Professional",
    description: "MBA, CLP (Certified Licensing Professional), Google Cloud certifications. Always learning, always growing.",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Published Researcher",
    description: "Published research on asynchronous pipeline circuits and smart sensor technologies. Science meets commerce.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Startup Champion",
    description: "IP Mentor for WIPO, Startup Community Leader, and judge for MIT Enterprise Forum and Venture Cup competitions.",
  },
  {
    icon: <Mic className="w-5 h-5" />,
    title: "Speaker & Educator",
    description: "Guest lecturer at the University of Waterloo, invited speaker at WIPO, and passionate about sharing knowledge.",
  },
];

function Slideshow() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const go = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % slides.length);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card shadow-xl" data-testid="slideshow">
      <div className="aspect-video relative overflow-hidden bg-black">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={current}
            src={slides[current].src}
            alt={slides[current].alt}
            custom={direction}
            variants={{
              enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full object-contain"
          />
        </AnimatePresence>

        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors z-10"
          data-testid="button-slideshow-prev"
          aria-label="Previous photo"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors z-10"
          data-testid="button-slideshow-next"
          aria-label="Next photo"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"}`}
              data-testid={`button-slideshow-dot-${i}`}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function About() {
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
            <h1 className="font-heading text-4xl md:text-6xl font-bold" data-testid="text-about-title">
              About <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm a technology leader who thrives at the intersection of engineering, business, and innovation. 
              My journey has taken me from designing semiconductor chips in Ottawa to commercializing AI in Qatar — 
              with quite a few stops in between.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-3xl mx-auto mb-20"
          >
            <Slideshow />
          </motion.div>

          <div className="max-w-4xl mx-auto mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-2xl md:text-3xl font-bold text-center mb-4"
              data-testid="text-my-journey"
            >
              My Journey
            </motion.h2>
            <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
              From semiconductor design to AI commercialization — a 20+ year adventure in technology.
            </p>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-blue-400/30 to-transparent md:-translate-x-px" />

              {journeyMilestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className={`relative flex items-start gap-6 mb-12 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  data-testid={`milestone-${milestone.year}`}
                >
                  <div className={`hidden md:block flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className={`inline-block p-6 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/20 transition-all duration-300 max-w-md ${i % 2 === 0 ? "ml-auto" : "mr-auto"}`}>
                      <div className="font-heading font-bold text-primary text-sm mb-1">
                        {milestone.year}
                      </div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 md:-translate-x-1.5 mt-8 z-10" />

                  <div className="md:hidden flex-1 ml-10">
                    <div className="p-5 rounded-2xl border border-border/50 bg-card/50">
                      <div className="font-heading font-bold text-primary text-sm mb-1">
                        {milestone.year}
                      </div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-2xl md:text-3xl font-bold text-center mb-4"
              data-testid="text-beyond-work"
            >
              Beyond the Resume
            </motion.h2>
            <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
              There's more to me than just titles and companies.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {personalFacts.map((fact, i) => (
                <motion.div
                  key={fact.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group p-6 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/20 transition-all duration-300"
                  data-testid={`card-fact-${fact.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                    {fact.icon}
                  </div>
                  <h3 className="font-heading font-bold text-base mb-2">{fact.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{fact.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
