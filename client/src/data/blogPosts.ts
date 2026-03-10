export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  source: "linkedin" | "original";
  linkedinUrl?: string;
  videoUrl?: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "ai-commercialization-qatar",
    title: "Bridging the Gap: From AI Research to Real-World Impact in Qatar",
    excerpt: "How Qatar's research institutions are turning cutting-edge AI into practical solutions for government and enterprise. My experience working with the Ministry of Justice, NCSA, and Qatar Airways on AI adoption.",
    date: "2026-02-15",
    readTime: "6 min read",
    tags: ["AI", "Qatar", "Innovation"],
    source: "linkedin",
    linkedinUrl: "https://www.linkedin.com/in/raghid",
    content: `There's a fascinating transformation happening in Qatar right now, and I'm lucky enough to be in the middle of it.

At Hamad Bin Khalifa University, I work at the intersection of cutting-edge AI research and real-world deployment. My job, in simple terms, is to take brilliant ideas from the lab and turn them into solutions that organizations can actually use.

## The Challenge

Qatar has world-class researchers producing groundbreaking work in LLMs, NLP, data platforms, and decision systems. But there's always been a gap — what academics call the "valley of death" — between a research paper and a deployed product.

The challenge isn't just technical. It's about translation. How do you take a complex AI model and explain its value to a government minister who cares about citizen services? How do you convince an airline that an AI-driven optimization tool will save them millions without disrupting their operations?

## Working with Qatar's Largest Organizations

Over the past year, I've had the privilege of working with some of Qatar's most important institutions:

**Ministry of Justice (MOJ)** — We're exploring how NLP and LLM technologies can streamline legal document processing, making justice more accessible and efficient.

**National Cyber Security Agency (NCSA)** — AI-driven threat detection and analysis tools that help protect Qatar's digital infrastructure.

**Mowasalat** — Smart transportation solutions that use data platforms and decision systems to optimize Qatar's public transport network.

**Qatar Airways** — Exploring AI applications across one of the world's most respected airlines, from customer experience to operational efficiency.

## Lessons Learned

Here's what I've learned about bridging the research-to-impact gap:

**1. Start with the problem, not the technology.** It's tempting to lead with "we have an amazing LLM." But organizations don't care about your model architecture. They care about their backlog of unprocessed documents, their rising security threats, or their customer satisfaction scores.

**2. Proof-of-concept is everything.** No one will commit to a full deployment based on a slide deck. Build something small, show it works, and let the results speak for themselves.

**3. Speak the language of your stakeholder.** When I talk to researchers, I speak about TRLs, benchmarks, and architectures. When I talk to government leaders, I speak about citizen impact, efficiency gains, and strategic alignment with Qatar's National Vision 2030.

**4. IP strategy matters from day one.** Before you demo anything, make sure your intellectual property is protected. I've seen too many great technologies lose their competitive advantage because IP wasn't considered early enough.

## What's Next

Qatar is positioning itself as a global leader in AI adoption, and the work we're doing at HBKU is a key part of that story. The next phase is about scaling — taking successful pilots and turning them into sustainable, deployed solutions that serve millions of people.

I'm incredibly excited about what's ahead. If you're working on similar challenges — bridging the gap between AI research and real-world impact — I'd love to connect and share notes.`,
  },
  {
    id: "enterprise-migrations",
    title: "What I Learned Migrating Apple to Shopify",
    excerpt: "Leading one of the most high-profile e-commerce platform migrations taught me that technology is only 30% of the challenge. The other 70% is people, process, and trust. Here's what I mean.",
    date: "2025-06-20",
    readTime: "8 min read",
    tags: ["E-Commerce", "Leadership", "Shopify"],
    source: "linkedin",
    linkedinUrl: "https://www.linkedin.com/in/raghid",
    content: `When people hear that I helped migrate some of the world's most iconic brands to Shopify — including Apple, Supreme, and Everlane — they usually ask about the technical challenges. The APIs, the data models, the payment integrations.

But here's the truth: the technology was only about 30% of the challenge. The other 70% was people, process, and trust.

## The Scale of Enterprise Migrations

Let me paint a picture. When a brand like Apple decides to change their e-commerce platform, it's not like switching from Gmail to Outlook. We're talking about:

- Millions of daily transactions
- Complex internationalization across dozens of countries
- Custom integrations with fulfillment, ERP, CRM, and marketing systems
- Teams of hundreds who have built workflows around the existing platform
- Zero tolerance for downtime or degraded customer experience

The stakes are enormous. One bad migration can cost hundreds of millions in lost revenue and irreparable brand damage.

## The 70% That Matters Most

### People

Every migration involves dozens of stakeholders with competing priorities. The engineering team wants clean code. The marketing team wants feature parity on day one. The finance team wants to know exactly when the cost savings kick in. The CEO wants to know it won't be a disaster.

My job was to be the connective tissue — the person who could sit in a room with engineers and talk about API rate limits, then walk into the C-suite and explain why we needed two more weeks for data validation.

### Process

Enterprise migrations fail when they're treated as one big project. They succeed when they're broken into phases with clear milestones, dependencies, and rollback plans.

We used an approach I call "progressive migration" — starting with lower-risk market segments, validating everything, then expanding. Each phase had its own success criteria, and we never moved to the next phase until the current one was rock solid.

### Trust

This might be the most important ingredient. When you're asking a brand to trust you with their entire digital commerce operation, you need to earn that trust every single day. That means:

- Being transparent about risks and challenges (no happy ears)
- Delivering on small promises before asking for big commitments
- Having a clear escalation path when things go wrong (because they will)
- Celebrating wins together, not just as the vendor

## The Numbers

Across my time at Shopify, the migrations I led contributed over $600M in GMV. But I'm most proud of the fact that every major migration was completed without significant customer-facing incidents.

## What I'd Tell Anyone Doing Enterprise Migrations

1. **Invest in discovery.** Spend more time understanding the current state than you think you need to. The things that break migrations are always the things nobody told you about.

2. **Build relationships before you need them.** When things go wrong at 2 AM (and they will), you need people who trust you enough to pick up the phone and work through it together.

3. **Document everything.** Not for bureaucracy's sake, but because enterprise migrations involve so many moving parts that no single person can hold it all in their head.

4. **Celebrate the boring stuff.** A successful data migration with zero errors isn't exciting, but it's the foundation everything else is built on.

The best migrations are the ones nobody notices. When customers wake up and everything just works — that's when you know you've done your job.`,
  },
  {
    id: "tech-commercialization",
    title: "The Valley of Death: Why Great Technology Fails to Reach the Market",
    excerpt: "After years of working in technology commercialization at Aramco, KAUST, and HBKU, I've seen the same patterns over and over. Here are the three biggest reasons promising technology never makes it to market — and how to avoid them.",
    date: "2025-03-10",
    readTime: "7 min read",
    tags: ["Commercialization", "Startups", "Strategy"],
    source: "linkedin",
    linkedinUrl: "https://www.linkedin.com/in/raghid",
    content: `I've spent the better part of a decade working in technology commercialization — at KAUST, Aramco, and now HBKU. I've evaluated hundreds of technologies, managed portfolios of patents, and led programs to take research from the lab to the market.

And I've watched far too many brilliant technologies die in what we call the "valley of death" — that treacherous gap between a working prototype and a commercial product.

Here are the three biggest reasons great technology fails to reach the market, and what you can do about it.

## 1. The Solution Looking for a Problem

This is the most common failure mode I've seen, and it's heartbreaking because the technology is often genuinely impressive.

A researcher develops a breakthrough material, a novel sensor, or a new AI algorithm. It works beautifully in the lab. Papers are published. Awards are won. And then someone asks: "Who would pay for this?"

The silence that follows is deafening.

**The fix:** Start with the customer, not the technology. Before you invest years in development, spend a few weeks talking to potential users. What are their pain points? What solutions do they currently use? What would they pay for a better one? If you can't answer these questions, your technology isn't ready for commercialization — no matter how technically brilliant it is.

## 2. The IP Afterthought

I've seen this so many times it makes me want to scream. A team develops amazing technology, publishes papers about it, presents it at conferences, and then — months later — decides to file a patent.

By then, it's often too late. The publications and presentations count as "prior art" that can invalidate a patent. The competitive advantage that the technology once had is now available to anyone who reads the paper.

**The fix:** Think about IP from day one. This doesn't mean filing patents on everything (that's expensive and often unnecessary). It means having an IP strategy that considers:
- What aspects of the technology are truly novel and protectable?
- Should we patent, keep it as a trade secret, or publish strategically?
- Who are the potential licensees, and what would they value most?
- How do we time our publications and patent filings to maximize protection?

At KAUST, I managed a portfolio of 190+ patents. The most valuable ones weren't necessarily the most technically impressive — they were the ones filed at the right time, covering the right claims, in the right jurisdictions.

## 3. The Pilot That Never Ends

Here's a scenario I've seen dozens of times: A technology team gets a pilot project with a potential customer. The pilot goes well. Everyone is happy. And then... nothing happens.

The pilot becomes a perpetual proof-of-concept that never transitions to a commercial deployment. The customer keeps saying "let's extend the pilot for another quarter" while the technology team keeps hoping that someday, somehow, it will turn into a real deal.

**The fix:** Define success criteria before the pilot starts. What specific outcomes need to be achieved for the customer to commit to a commercial agreement? What's the timeline? What's the decision-making process?

At Aramco, I learned to structure pilots with clear go/no-go gates. At each gate, both sides had to make a decision: proceed to the next phase, pivot, or stop. This prevented the "zombie pilot" problem and forced honest conversations about whether the technology was truly meeting the customer's needs.

## The Way Forward

Technology commercialization is hard. If it were easy, every lab breakthrough would become a billion-dollar product. But it's not impossible, and it's not random. The teams that succeed are the ones that:

1. **Start with the market**, not the technology
2. **Protect their IP** strategically and early
3. **Structure their pilots** with clear outcomes and timelines
4. **Build diverse teams** that combine technical depth with business acumen

If you're a researcher wondering why your technology isn't getting traction, or an investor trying to evaluate early-stage deep tech, I hope these lessons are useful. They're hard-won, and I'm still learning new ones every day.`,
  },
  {
    id: "patent-strategy",
    title: "Patent Strategy Isn't Just for Lawyers: A Tech Leader's Perspective",
    excerpt: "From my time at Google managing patent acquisitions worth $5.3M to negotiating licensing deals at KAUST, I've learned that patent strategy is a core business function. Here's why every tech leader should care about IP.",
    date: "2024-11-05",
    readTime: "5 min read",
    tags: ["IP Strategy", "Patents", "Google"],
    source: "linkedin",
    linkedinUrl: "https://www.linkedin.com/in/raghid",
    content: `Most tech leaders I meet think of patents as a legal matter. Something the lawyers handle. Something that happens in the background while they focus on building products and shipping code.

I used to think that too. Then I spent three years at Google working on patent strategy, followed by years managing technology portfolios at KAUST and commercializing IP at Aramco and HBKU. And I learned something that changed my perspective entirely:

**Patent strategy is a core business function, not a legal afterthought.**

## What I Learned at Google

At Google, I managed the company's participation in the IP3 (Industry Patent Purchase Promotion) program. This was a groundbreaking initiative where Google invited patent holders to offer their patents for sale at a set price.

My team evaluated, acquired, and licensed 56 patent families with a total budget of $5.3 million. But the real value wasn't in the patents themselves — it was in the intelligence we gathered about the competitive landscape.

By analyzing thousands of patent offers, we gained deep insights into:
- Which technology areas were heating up
- Which competitors were building patent portfolios (and where)
- Where Google had freedom to operate — and where it didn't
- Which patents were actually worth acquiring vs. which were noise

This intelligence informed product decisions, R&D investment, and strategic partnerships. Patents weren't just legal documents — they were a window into the future of technology competition.

## Why Every Tech Leader Should Care

Here are three reasons patent strategy should be on every tech leader's radar:

### 1. Patents Are a Competitive Moat

In a world where code can be copied and features can be cloned, patents provide a defensible competitive advantage. But only if you file the right ones, at the right time, in the right jurisdictions.

### 2. Patents Are a Revenue Stream

Licensing revenue from patents can be significant. At KAUST, some of our most valuable deals came from licensing technologies that the university itself would never commercialize directly. The patents allowed us to capture value from innovations that would otherwise sit on a shelf.

### 3. Patents Are a Negotiation Tool

In the tech industry, patents are often used as bargaining chips in cross-licensing deals. Having a strong portfolio gives you leverage when negotiating with partners, competitors, and potential acquirers.

## Practical Advice for Tech Leaders

1. **Educate yourself.** You don't need to become a patent attorney, but you should understand the basics: what can be patented, how the process works, and what a patent actually protects.

2. **Integrate IP into your product development process.** Every time your team builds something novel, ask: "Is this patentable? Should we protect it?"

3. **Think globally.** Patent protection is territorial. A US patent doesn't protect you in Europe or China. Think about where your markets and competitors are when deciding where to file.

4. **Don't just file and forget.** A patent portfolio needs active management. Regularly review your portfolio to identify patents that should be maintained, licensed, or abandoned.

5. **Build relationships with your IP team.** Whether it's an in-house counsel or an external firm, the best patent strategies come from close collaboration between technical and legal teams.

Patents aren't just for lawyers. They're a strategic asset that every tech leader should understand and leverage.`,
  },
  {
    id: "startup-mentorship",
    title: "5 Things I Tell Every Startup Founder (That They Don't Want to Hear)",
    excerpt: "As a WIPO IP mentor and startup competition judge, I've worked with hundreds of founders. The advice that matters most is rarely about the product — it's about the market, the team, and the timing.",
    date: "2024-08-22",
    readTime: "6 min read",
    tags: ["Startups", "Mentorship", "Entrepreneurship"],
    source: "linkedin",
    linkedinUrl: "https://www.linkedin.com/in/raghid",
    content: `Over the years, I've mentored dozens of startups through WIPO's IP Management Clinic, judged competitions for MIT Enterprise Forum and Venture Cup, and led investments at SDTC. I've sat across the table from hundreds of passionate founders with big dreams and bold visions.

And I've noticed something: the advice that matters most is usually the advice founders don't want to hear.

Here are five things I tell every startup founder — with love and respect, but without sugarcoating.

## 1. "Your Technology Is Not Your Product"

I see this constantly, especially with deep tech founders. They've spent years developing an incredible technology — a novel algorithm, a new material, a breakthrough device — and they assume that the technology itself is the product.

It's not.

A product is a technology packaged with a user experience, a business model, a support system, and a go-to-market strategy. Nobody buys technology. They buy solutions to problems. If you can't articulate the problem you're solving in one sentence, you're not ready.

## 2. "Your Market Is Smaller Than You Think"

Every pitch deck I've ever seen includes a TAM (Total Addressable Market) slide with a number in the billions. And almost every time, that number is wildly optimistic.

Here's the reality: your actual market — the people who know they have the problem you solve, can afford your solution, and are willing to switch from what they're currently using — is a tiny fraction of your TAM.

Start with your SAM (Serviceable Addressable Market), then narrow it further to your SOM (Serviceable Obtainable Market). That's the number that matters. If your SOM can support a viable business, great. If not, you need to rethink your strategy.

## 3. "You Need to Talk to Customers Before You Build"

This is Steve Blank 101, and yet most founders still skip this step. They build for months (or years) in isolation, convinced that their vision is so clear and their technology is so good that customers will come running.

They won't.

Before you write a single line of code or build a single prototype, talk to 50 potential customers. Not friends and family — real potential customers who would actually pay for your solution. Ask them about their problems, their current solutions, and what they'd pay for something better.

The insights you gain from these conversations will save you months of building the wrong thing.

## 4. "Your IP Strategy Can't Wait"

I've seen too many startups treat IP as something they'll figure out later. "We'll file patents once we have funding." "We'll worry about trademarks when we launch."

By then, it's often too late. You've disclosed your innovation at a conference, a competitor has filed first, or you've chosen a company name that's already trademarked.

IP strategy doesn't have to be expensive at the early stage. But it does have to be intentional. At minimum:
- Document your innovations with dated records
- Do a basic trademark search before naming your company
- Understand the difference between patents, trade secrets, and copyrights
- Be strategic about what you publish and when

## 5. "The Team Matters More Than the Idea"

Investors don't invest in ideas. They invest in teams. I've seen mediocre ideas executed brilliantly by great teams, and I've seen brilliant ideas fail because the team couldn't execute.

When I evaluate startups, I look for:
- **Complementary skills:** Do you have both technical and business expertise?
- **Resilience:** Have the founders dealt with adversity before?
- **Coachability:** Can they take feedback and adapt?
- **Domain expertise:** Do they deeply understand the market they're entering?

If you're a solo technical founder, find a business co-founder. If you're a business person with a great idea, find a technical co-founder. The combination is what makes startups succeed.

## The Bottom Line

Starting a company is one of the hardest things you can do. The founders I admire most aren't the ones with the most brilliant ideas — they're the ones who are honest with themselves, hungry for feedback, and willing to adapt.

If any of this resonated with you, feel free to reach out. I'm always happy to chat with founders who are building something they believe in.`,
  },
  {
    id: "agile-real-world",
    title: "Agile Beyond Software: Applying Scrum to Technology Commercialization",
    excerpt: "Most people think Agile is only for software development. I've successfully applied Scrum and Kanban methodologies to patent licensing, technology pilots, and investment due diligence. Here's how.",
    date: "2024-05-15",
    readTime: "5 min read",
    tags: ["Agile", "Program Management", "Innovation"],
    source: "linkedin",
    linkedinUrl: "https://www.linkedin.com/in/raghid",
    content: `When I tell people that I use Scrum to manage patent licensing deals and Kanban to track technology commercialization pipelines, I usually get puzzled looks.

"Isn't Agile for software development?"

Yes, Agile was born in software. But its core principles — iterative progress, frequent feedback, adaptive planning, and cross-functional collaboration — are universal. I've been applying these principles to non-software contexts for over a decade, and the results have been remarkable.

## Scrum for Patent Licensing at KAUST

At KAUST, I managed a portfolio of 80+ technologies and 190+ patents. Negotiating licensing agreements is traditionally a slow, waterfall-like process: identify a licensee, negotiate terms, draft an agreement, go through legal review, sign, and implement.

This process could take 12-18 months. We needed to move faster.

So we applied Scrum principles:

**Sprints:** We organized our licensing efforts into two-week sprints. Each sprint had a clear goal — whether it was completing due diligence on a potential licensee, drafting a term sheet, or finalizing contract language.

**Daily standups:** The licensing team (including legal, technical, and business members) had brief daily check-ins to identify blockers and keep momentum.

**Sprint reviews:** At the end of each sprint, we reviewed progress with stakeholders and adjusted priorities based on feedback.

**Retrospectives:** We regularly reflected on what was working and what wasn't, and made process improvements.

The result? We reduced average deal closure time by about 40%. More importantly, the quality of our deals improved because we caught issues earlier and adapted faster.

## Kanban for Technology Commercialization at Aramco

At Aramco, I used Kanban boards to visualize and manage the technology commercialization pipeline. Each technology moved through stages:

1. **Discovery** — Initial assessment of market potential
2. **Validation** — Customer interviews and competitive analysis
3. **Pilot** — Proof-of-concept with a real customer
4. **Scale** — Commercial deployment planning
5. **Launch** — Go-to-market execution

Each stage had WIP (Work In Progress) limits to prevent the team from spreading too thin. We could only have a certain number of technologies in each stage at any time. This forced us to make tough prioritization decisions and focus on the technologies with the highest potential.

The visual nature of the Kanban board made it easy to communicate pipeline status to senior management without lengthy reports. A five-minute walkthrough of the board told a more compelling story than any PowerPoint deck.

## Key Principles for Agile Outside Software

If you want to apply Agile to non-software contexts, here are the principles that matter most:

**1. Make work visible.** Whether it's a physical board or a digital tool, visualizing your work helps everyone understand what's happening, what's blocked, and what's coming next.

**2. Limit work in progress.** This is counterintuitive for most organizations, which reward busy-ness. But research consistently shows that limiting WIP increases throughput and quality.

**3. Iterate and adapt.** Don't try to plan everything upfront. Plan enough to start, execute, learn, and adjust. The world changes too fast for 18-month project plans.

**4. Embrace cross-functional collaboration.** The best outcomes come from teams that include diverse perspectives — technical, business, legal, and customer-facing.

**5. Measure outcomes, not outputs.** Don't measure how many patents you filed or how many meetings you had. Measure how many deals you closed, how much revenue you generated, and how many technologies you successfully deployed.

## The Results Speak for Themselves

Across my career — from Google to KAUST to Aramco to Shopify to HBKU — I've consistently found that Agile principles produce better outcomes than traditional project management approaches. Not because Agile is magic, but because it forces you to stay close to reality, adapt to change, and focus on what actually matters.

If you're managing complex programs outside of software development, give Agile a try. Start small, experiment, and adapt. That's the Agile way.`,
  },
];

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
