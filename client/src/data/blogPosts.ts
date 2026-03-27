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
    id: "research-commercialization",
    title: "Translating research into real world impact through effective commercialization.",
    excerpt:
      "Great research does not automatically translate into real world impact. That requires effective commercialization.",
    date: "2026-03-07",
    readTime: "6 min read",
    tags: ["Technology", "Commercialization", "Innovation"],
    source: "linkedin",
    linkedinUrl: "https://www.linkedin.com/in/raghid",
    videoUrl: "https://www.youtube.com/embed/Ep5neHTiT3E",
    content: `Great research does not automatically translate into real world impact. That requires effective commercialization.

Commercialization is the process of turning research into real-world value. It’s not just about patents or startups. It’s about:

- Understanding the problem a technology solves
- Protecting intellectual property effectively
- Validating the technology with industry through demos and pilots
- Structuring industry collaborations and licensing agreements so companies can actually adopt it.

In emerging innovation ecosystems, there are unique challenges.

Industry is often risk-averse, and most companies prefer to buy proven solutions over investing in innovative research.

Local markets are small, which limits scaling and forces innovators to think globally at an early stage.

At the same time, researchers are incentivized to publish, not to productize new technology.

In computing and AI, the challenges are amplified.

Technologies evolve rapidly, and AI shortens development cycles even further. AI models age quickly. Access to data is often constrained. And global hyperscalers set expectations that local research is often unfairly compared against.

The question is no longer **‘Is the research good?’** but rather: **‘Is it competitive, deployable, and relevant now?’**”

Except for foundational breakthroughs, patenting is hard in the computing space. And in the age of AI assisted coding, computer code, even if protected by copyright, has limited value.

What truly matters is proven market traction and users.

A solution with market traction can always be monetized.

But without users, even the most brilliant technology has no value.

So what works?

1. Start with industry problems, not papers.
2. Use proof-of-concepts and pilots to de-risk adoption.
3. Focus your IP strategy to incorporate not just patents, but also data and trade secrets.
4. When filing patents, carefully craft claims that are commercially valuable.
5. For universities, position yourself as a research partner, not a vendor.

Commercialization is not an administrative function. And it’s not about paperwork and vanity metrics.

- It’s about creating pathways for research to solve real problems.
- It’s about adding value and addressing pain points.
- It’s about building trusted partnerships with industry.

That’s when innovation truly starts to make an impact!
    `,
  },
  {
    id: "patent-strategy",
    title: "Why Intellectual property (IP) should be a core part of your business strategy",
    excerpt:
      "Are patents just pieces of paper? Are they a legal excercise that your company forces you to go through? Or are they just trophies that you hang in your office? Well, of course not!",
    date: "2026-03-01",
    readTime: "6 min read",
    tags: ["Patents", "Intellectual Property", "Innovation"],
    source: "linkedin",
    linkedinUrl: "https://www.linkedin.com/in/raghid",
    videoUrl: "https://www.youtube.com/embed/p45JFsVsPP0",
    content: `Are patents just pieces of paper? Are they a legal excercise that your company forces you to go through? Or are they just trophies that you hang in your office? Well, of course not!

A patent is a legal instrument with real, quantifiable business value. And that value has very little to do with how many pages the patent has, or even how clever the invention sounds. It has everything to do with what the patent actually protects.

Here’s the key point many founders and executives miss: A patent’s value reflects the market opportunity it legally controls. That control comes from the granted claims, not the description, not the diagrams, not the title, and certainly not the costs you incurred to obtain the patent.

The claims define what competitors are legally prevented from doing. Which means where freedom-to-operate is restricted, and how much leverage you have in licensing, partnerships, or litigation.

In other words, claims are where value lives.

From my experience advising startups and large companies on IP strategy and valuation, strong patents share a few characteristics:

1. They map directly to revenue. If a patent doesn’t read on a product, a process, or a future market roadmap, its value is limited, no matter how novel the technology is.
2. They create "strategic pressure". The most valuable patents force competitors to redesign their product, alter their product roadmap, pay a license fee, or exit the market completely. If your patent can be easily worked around, its economic value drops sharply.
3. They scale with the business. Great patents grow in value as markets grow. Poorly scoped patents stay flat, even if the company succeeds.
4. Context matters. The same patent can be worth thousands in one company’s hands and millions in another’s. It depends on market position, enforcement capability, and the business strategy you follow in leveraging your patent assets. For example, patents have greater value when they are part of a portfolio that has been well thought-out to protect different aspects of the technology to maximize protection. That way it becomes much harder for your competitors to work around or design around a single patent or a single claim. Instead, they have to take the entire portfolio into consideration.

This is why patents are not a legal paperwork exercise, and patent value is not an accounting exercise. Rather, patents and intellectual property (IP) should be a core part of your business strategy.

If you’re a founder, investor, or executive, the real questions aren’t: **“Do we have patents?”** or **"how many patents do we have?"**

The questions to ask are:

1. What market do our patents control?
2. Which competitors do they block?
3. And how do they translate into revenue or leverage?

Let’s discuss, leave a comment! Feel free to send an invite if you are interested in these topics.`,
  },
  {
    id: "ai-commercialization-qatar",
    title: "Bridging the Gap: From AI Research to Real-World Impact in Qatar",
    excerpt:
      "How Qatar's research institutions are turning cutting-edge AI into practical solutions for government and enterprise. My experience working with government departments and enterprise partners on AI adoption.",
    date: "2026-02-15",
    readTime: "6 min read",
    tags: ["AI", "Qatar", "Innovation"],
    source: "linkedin",
    linkedinUrl: "https://www.linkedin.com/in/raghid",
    content: `There's a fascinating transformation happening in Qatar right now, and I'm lucky enough to be in the middle of it.

At Hamad Bin Khalifa University (HBKU), I work at the intersection of cutting-edge AI research and real-world deployment. My job, in simple terms, is to take brilliant ideas from the research labs and turn them into solutions that organizations can actually use.

## The Challenge

Qatar has world-class researchers producing groundbreaking work in LLMs, NLP, data platforms, and decision systems. But there's always been a gap. What academics call the "valley of death" between a research paper and a deployed product.

The challenge isn't just technical. It's about translation. How do you take a complex AI model and explain its value to a government minister who cares about citizen services? How do you convince an airline that an AI-driven optimization tool will save them millions without disrupting their operations?

## Working with Qatar's Largest Organizations

Over the past year, I've had the privilege of working with some of Qatar's largest and most important institutions, including government departments and enterprise organizations. Here's a snapshot of what we're working on:

**Fanar AI** — We're exploring how to deploy Qatar's locally developed and hosted LLM to government institutions to steamline complex workflows while ensuring data security and sovereignty.

**Digital Transformation** — Applying our technical strength at HBKU to lead digital transformation programs for government and enterprise partners, preparing these organizations for an AI-enabled future.

**AI Interviewing** — Streamlining interview processes in large organizations by deploying an AI-driven speech based interview platform.

**Training** — Exploring AI applications in staff training by building solutions that combine LLM, RAG, speech-to-text and text-to-speech, as well as specialized algorithms for testing and evaluation.

## Lessons Learned

Here's what I've learned about bridging the research-to-impact gap:

1. **Start with the problem, not the technology.** It's tempting to lead with "we have an amazing LLM." But organizations don't care about your model architecture. They care about their backlog of unprocessed documents, their rising security threats, or their customer satisfaction scores.
2. **Proof-of-concept is everything.** No one will commit to a full deployment based on a slide deck. Build something small, show it works, and let the results speak for themselves.
3. **Speak the language of your stakeholder.** When I talk to researchers, I speak about Technology Readiness Levels (TRLs), benchmarks, and architectures. When I talk to government leaders, I speak about citizen impact, efficiency gains, and strategic alignment with Qatar's National Vision 2030.
4. **IP strategy matters from day one.** Before you demo anything, make sure your intellectual property is protected. I've seen too many great technologies lose their competitive advantage because IP wasn't considered early enough.

## What's Next

Qatar is positioning itself as a global leader in AI adoption, and the work we're doing at HBKU is a key part of that story. The next phase is about scaling by taking successful pilots and turning them into sustainable, deployed solutions that serve millions of people.

I'm incredibly excited about what's ahead. If you're working on similar challenges of bridging the gap between AI research and real-world impact, I'd love to connect and share notes!`,
  },
  {
    id: "enterprise-migrations",
    title: "What I Learned Migrating Apple Premium Resellers to Shopify",
    excerpt:
      "Leading one of the most high-profile e-commerce platform migrations taught me that technology is only 30% of the challenge. The other 70% is people, process, and trust. Here's what I mean.",
    date: "2025-06-20",
    readTime: "8 min read",
    tags: ["E-Commerce", "Leadership", "Shopify"],
    source: "linkedin",
    linkedinUrl: "https://www.linkedin.com/in/raghid",
    content: `When people hear that I helped migrate some of the world's most iconic brands to Shopify such as Apple, Supreme, and Everlane, they usually ask about the technical challenges. The APIs, the data models, the payment integrations.

But here's the truth: the technology was only about 30% of the challenge. The other 70% was people, process, and trust.

## The Scale of Enterprise Migrations

Let me paint a picture. When a brand like Apple decides to change the default e-commerce platform of their Premium Resellers, it's not like switching from Gmail to Outlook. We're talking about:

- Millions of daily transactions
- Complex internationalization across dozens of countries
- Custom integrations with fulfillment, ERP, CRM, and marketing systems
- Teams of hundreds who have built workflows around the existing platform
- Zero tolerance for downtime or degraded customer experience

The stakes are enormous. One bad migration can cost millions in lost revenue and irreparable brand damage.

## The 70% That Matters Most

### People

Every migration involves dozens of stakeholders with competing priorities. The engineering team wants clean code. The marketing team wants feature parity on day one. The finance team wants to know exactly when the cost savings kick in. The CEO wants to know it won't be a disaster.

My job was to be the connective tissue. The person who could sit in a room with engineers and talk about API rate limits, then walk into the C-suite and explain why we needed two more weeks for data validation.

### Process

Enterprise migrations fail when they're treated as one big project. They succeed when they're broken into phases with clear milestones, dependencies, and rollback plans.

We used an approach I call "progressive migration", which basically means starting with lower-risk market segments, validating everything, then expanding. Each phase had its own success criteria, and we never moved to the next phase until the current one was rock solid.

### Trust

This might be the most important ingredient. When you're asking a brand to trust you with their entire digital commerce operation, you need to earn that trust every single day. That means:

- Being transparent about risks and challenges
- Delivering on small promises before asking for big commitments
- Having a clear escalation path when things go wrong (because they will)
- Celebrating wins together as a partner, not just as the vendor

## The Numbers

Across my time at Shopify, the migrations I led contributed over $600M in GMV. But I'm most proud of the fact that every major migration was completed without significant customer-facing incidents.

## What I'd Tell Anyone Doing Enterprise Migrations

1. **Invest in discovery.** Spend more time understanding the current state than you think you need to. The things that break migrations are always the things nobody told you about.
2. **Build relationships before you need them.** When things go wrong at 2 AM (and they will), you need people who trust you enough to pick up the phone and work through it together.
3. **Document everything.** Not for bureaucracy's sake, but because enterprise migrations involve so many moving parts that no single person can hold it all in their head.
4. **Celebrate the boring stuff.** A successful data migration with zero errors isn't exciting, but it's the foundation everything else is built on.

The best migrations are the ones nobody notices. When customers wake up and everything just works, that's when you know you've done your job.`,
  },
  {
    id: "tech-commercialization",
    title:
      "The Valley of Death: Why Great Technology Fails to Reach the Market",
    excerpt:
      "After years of working in technology commercialization at Aramco, KAUST, and HBKU, I've seen the same patterns over and over. Here are the three biggest reasons promising technology never makes it to market, and how to avoid them.",
    date: "2025-03-10",
    readTime: "7 min read",
    tags: ["Commercialization", "Startups", "Strategy"],
    source: "linkedin",
    linkedinUrl: "https://www.linkedin.com/in/raghid",
    content: `I've spent the better part of a decade working in technology commercialization at KAUST, Aramco, and now HBKU. I've evaluated hundreds of technologies, managed portfolios of patents, and led programs to take research from the lab to the market.

And I've watched far too many brilliant technologies die in what we call the "valley of death" - that treacherous gap between a working prototype and a commercial product.

Here are the three biggest reasons great technology fails to reach the market, and what you can do about it.

## 1. The Solution Looking for a Problem

This is the most common failure mode I've seen, and it's heartbreaking because the technology is often genuinely impressive.

A researcher develops a breakthrough material, a novel sensor, or a new AI algorithm. It works beautifully in the lab. Papers are published. Awards are won. And then someone asks: "Who would pay for this?"

The silence that follows is deafening.

**The fix:** Start with the customer, not the technology. Before you invest years in development, spend a few weeks talking to potential users. What are their pain points? What solutions do they currently use? What would they pay for a better one? If you can't answer these questions, your technology isn't ready for commercialization, no matter how technically brilliant it is.

## 2. The IP Afterthought

I've seen this happen so many times. A team develops amazing technology, publishes papers about it, presents it at conferences, and then - months later - decides to file a patent.

By then, it's often too late. The publications and presentations often count as "prior art" that can invalidate a patent. The competitive advantage that the technology once had is now available to anyone who reads the paper.

**The fix:** Think about IP from day one. This doesn't mean filing patents on everything (that's expensive and often unnecessary). It means having an IP strategy that considers:

- What aspects of the technology are truly novel and protectable?
- Should we patent, keep it as a trade secret, or publish strategically?
- Who are the potential licensees, and what would they value most?
- How do we time our publications and patent filings to maximize protection?

At KAUST, I managed a portfolio of 190+ patents. The most valuable ones weren't necessarily the most technically impressive. They were the ones filed at the right time, covering the right claims, in the right jurisdictions.

## 3. The Pilot That Never Ends

Here's a scenario I've seen dozens of times: A technology team gets a pilot project with a potential customer. The pilot goes well. Everyone is happy. And then... nothing happens.

The pilot becomes a perpetual proof-of-concept that never transitions to a commercial deployment. The customer keeps saying "let's extend the pilot for another quarter" while the technology team keeps hoping that someday, somehow, it will turn into a real deal.

**The fix:** Define success criteria before the pilot starts. What specific outcomes need to be achieved for the customer to commit to a commercial agreement? What's the timeline? What's the decision-making process?

To avoid this situation, I learned to structure pilots with clear go/no-go gates. At each gate, both sides had to make a decision: proceed to the next phase, pivot, or stop. This prevented the "zombie pilot" problem and forced honest conversations about whether the technology was truly meeting the customer's needs.

## The Way Forward

Technology commercialization is hard. If it were easy, every lab breakthrough would become a billion-dollar product. But it's not impossible, and it's not random. The teams that succeed are the ones that:

1. **Start with the market**, not the technology
2. **Protect their IP** strategically and early
3. **Structure their pilots** with clear outcomes and timelines
4. **Build diverse teams** that combine technical depth with business acumen

If you're a researcher wondering why your technology isn't getting traction, or an investor trying to evaluate early-stage deep tech, I hope these lessons are useful. They're hard-won, and I'm still learning new ones every day.`,
  },
  {
    id: "patent-strategy2",
    title:
      "Patent Strategy Isn't Just for Lawyers: A Tech Leader's Perspective",
    excerpt:
      "From my time at Google managing patent acquisitions worth $5.3M to negotiating licensing deals at KAUST and HBKU, I've learned that patent strategy is a core business function. Here's why every tech leader should care about IP.",
    date: "2024-11-05",
    readTime: "5 min read",
    tags: ["IP Strategy", "Patents", "Google"],
    source: "linkedin",
    linkedinUrl: "https://www.linkedin.com/in/raghid",
    content: `Most tech leaders I meet think of patents as a legal matter. Something the lawyers handle. Something that happens in the background while they focus on building products and shipping code.

I used to think that too. Then I joined Google's patent team and worked on the company's patent strategy. And I learned something that changed my perspective entirely:

**Patent strategy is a core business function, not a legal afterthought.**

## What I Learned at Google

At Google, I managed the company's participation in the IP3 (Industry Patent Purchase Promotion) program. This was a groundbreaking initiative where Google invited patent holders to offer their patents for sale at a set price.

My team evaluated, acquired, and licensed 56 patent families with a total budget of $5.3 million. But the real value wasn't in the patents themselves. It was in the intelligence we gathered about the competitive landscape.

By analyzing thousands of patent offers, we gained deep insights into:

- Which technology areas were heating up
- Which competitors were building patent portfolios (and where)
- Where Google had freedom to operate and where it didn't
- Which patents were actually worth acquiring vs. which were noise

This intelligence informed product decisions, R&D investment, and strategic partnerships. Patents aren't just legal documents. They're a window into the future of technology competition.

## Why Every Tech Leader Should Care

Here are three reasons patent strategy should be on every tech leader's radar:

### 1. Patents Are a Competitive Moat

In a world where code can be copied and features can be cloned, patents provide a defensible competitive advantage. But only if you file the right ones, at the right time, in the right jurisdictions.

### 2. Patents Are a Revenue Stream

Licensing revenue from patents can be significant. Often, valuable deals can come from licensing technologies that the patent owner would never commercialize directly. Patents allowed us to capture value from innovations that would otherwise sit on a shelf.

### 3. Patents Are a Negotiation Tool

In the tech industry, patents are often used as bargaining chips in cross-licensing deals. Having a strong portfolio gives you leverage when negotiating with partners, competitors, and potential acquirers.

## Practical Advice for Tech Leaders

1. **Educate yourself.** You don't need to become a patent attorney, but you should understand the basics: what can be patented, how the process works, and what a patent actually protects.
2. **Integrate IP into your product development process.** Every time your team builds something novel, ask: "Is this patentable? Should we protect it?"
3. **Think globally.** Patent protection is territorial. A US patent doesn't protect you in Europe or China. When deciding where to file, think about where your markets and competitors are located.
4. **Don't just file and forget.** A patent portfolio needs active management. Regularly review your portfolio to identify patents that should be maintained, licensed, or abandoned.
5. **Build relationships with your IP team.** Whether it's an in-house counsel or an external firm, the best patent strategies come from close collaboration between technical and legal teams.

Patents aren't just for lawyers. They're a strategic asset that every tech leader should understand and leverage.`,
  },
  {
    id: "startup-mentorship",
    title:
      "5 Things I Tell Every Startup Founder (That They Don't Want to Hear)",
    excerpt:
      "As a WIPO IP mentor and startup competition judge, I've worked with hundreds of founders. The advice that matters most is rarely about the product. It's about the market, the team, and the timing.",
    date: "2024-08-22",
    readTime: "6 min read",
    tags: ["Startups", "Mentorship", "Entrepreneurship"],
    source: "linkedin",
    linkedinUrl: "https://www.linkedin.com/in/raghid",
    content: `Over the years, I've mentored dozens of startups through various venues including WIPO's IP Management Clinic, the MIT Enterprise Forum, and Venture Cup. I've also led investments into sustainable technology projects while at SDTC. I've sat across the table from hundreds of passionate founders with big dreams and bold visions.

And I've noticed something: the advice that matters most is usually the advice founders don't want to hear.

Here are five things I tell every startup founder with love and respect, but without sugarcoating.

## 1. Your Technology Is Not Your Product

I see this constantly, especially with deep tech founders. They've spent years developing an incredible technology. It could be a novel algorithm, a new material, a breakthrough device, and they assume that the technology itself is the product.

It's not.

A product is a technology packaged with a user experience, a business model, a support system, and a go-to-market strategy. Nobody buys technology. They buy solutions to problems. If you can't articulate the problem you're solving in one sentence, you're not ready.

## 2. Your Market Is Smaller Than You Think

Every pitch deck I've ever seen includes a TAM (Total Addressable Market) slide with a number in the billions. And almost every time, that number is wildly optimistic.

Here's the reality: your actual market - the people who know they have the problem you solve, can afford your solution, and are willing to switch from what they're currently using - is a tiny fraction of your TAM.

Although showing a huge addressable market in your pitch can impress investors, make sure that you build your businses strategy on realistic projections. If they can support a viable business, great. If not, you need to rethink your strategy.

## 3. You Need to Talk to Customers Before You Build

This is such an obvious and widely discussed point, yet most founders still skip this step. They build for months (or years) in isolation, convinced that their vision is so clear and their technology is so good that customers will come running.

They won't.

Before you write a single line of code or build a single prototype, talk to 50 potential customers. Not friends and family. Real potential customers who would actually pay for your solution. Ask them about their problems, their current solutions, and what they'd pay for something better.

The insights you gain from these conversations will save you months of building the wrong thing.

## 4. Your IP Strategy Can't Wait

I've seen too many startups treat IP as something they'll figure out later. "We'll file patents once we have funding." "We'll worry about trademarks when we launch."

By then, it's often too late. You've disclosed your innovation at a conference, a competitor has filed first, or you've chosen a company name that's already trademarked.

IP strategy doesn't have to be expensive at the early stage. But it does have to be intentional. At minimum:

- Document your innovations with dated records
- Do a basic trademark search before naming your company
- Understand the difference between patents, trade secrets, and copyrights
- Be strategic about what you publish and when

## 5. The Team Matters More Than the Idea

Investors don't invest in ideas. They invest in teams. I've seen mediocre ideas executed brilliantly by great teams, and I've seen brilliant ideas fail because the team couldn't execute.

When I evaluate startups, I look for:

- **Complementary skills:** Do you have both technical and business expertise?
- **Resilience:** Have the founders dealt with adversity before?
- **Coachability:** Can they take feedback and adapt?
- **Domain expertise:** Do they deeply understand the market they're entering?

If you're a solo technical founder, find a business co-founder. If you're a business person with a great idea, find a technical co-founder. The combination is what makes startups succeed.

## The Bottom Line

Starting a company is one of the hardest things you can do. The founders I admire most aren't the ones with the most brilliant ideas. Rather, they're the ones who are honest with themselves, hungry for feedback, and willing to adapt.

If any of this resonated with you, feel free to reach out. I'm always happy to chat with founders who are building something they truly believe in!`,
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
