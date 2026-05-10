## Day 1 — 2026-05-08

**Hours worked:** 3

**What I did:**  
Set up the Next.js project with TypeScript, Tailwind, and shadcn/ui. Created the initial folder architecture, initialized GitHub, and deployed the base app to Vercel. Started exploring the overall product positioning and audit flow UX.

**What I learned:**  
The assignment rewards clarity and product thinking more than backend complexity. Early deployment and structure setup reduce later friction significantly.

**Blockers / what I'm stuck on:**  
Still deciding how detailed the audit engine heuristics should be without overcomplicating the MVP.

**Plan for tomorrow:**  
Build the spend input flow and define the first version of the pricing/audit logic.

---

## Day 2 — Building the First Functional Version

This was probably the most important day for the project so far, this was the point where it went from being just a landing page to acting like a real product.

I started the day by improving the landing page I built earlier. The structure was already there but it still felt too flat and unfinished. I spent time refining the spacing, typography, button hierarchy and the audit preview section. I tried to keep the design minimal instead of adding unnecessary animations or visual clutter.

The thing I learned while working on the UI is that clean spacing and hierarchy are worth way more than fancy design. A couple of small changes made the app feel way more premium and trustworthy.

After that, I started building the actual audit form.

This part was honestly intimidating at the beginning because this is my first serious project with Next.js. I had to understand how components are structured, how state works in client components and how to keep the code organized without overcomplicating everything.

I created a separate `SpendForm` component and slowly built the form step by step instead of trying to do everything at once.

The form currently includes:
- AI tool selection
- Monthly spend input
- Number of seats
- Primary workflow/use case
- Audit generation button

At first, the form was static. Then I connected it to React state so the inputs actually stored values. That moment was surprisingly satisfying because it made the app feel interactive for the first time.

The biggest challenge today came while designing the recommendation engine.

Initially, my recommendations were unintentionally biased toward ChatGPT because that was the easiest logic to write quickly. But after thinking about the assignment more carefully, I realized the product would instantly lose credibility if every recommendation pushed users toward one platform.

That forced me to rethink the entire purpose of the audit engine.

Instead of:
“Which AI tool is the best?”

I reframed the problem as:
“Is this organization paying for features they actually use?”

That single shift changed everything.

The recommendations became more focused on:
- pricing efficiency
- workflow fit
- collaboration needs
- utilization patterns
- overlapping subscriptions

This made the product feel much more realistic and financially motivated instead of opinion-driven.

For example:
rather than recommending a specific platform aggressively, the engine now says things like:
- small teams may not need collaboration-focused plans
- certain workflows may not justify premium coding tools
- overlapping subscriptions can create redundant spend

These recommendations feel more believable because they sound like software procurement reasoning instead of AI fandom.

I also started researching actual pricing structures for ChatGPT and Claude. This part helped me understand how differently each platform positions itself.

ChatGPT feels more like a broad productivity ecosystem, while Claude positions itself more around reasoning, writing, and research-heavy workflows.

That research directly influenced how I started thinking about audit recommendations.

Another important realization today was that the assignment is not really testing advanced backend engineering. It’s testing:
- product thinking
- prioritization
- reasoning quality
- research depth
- ability to create a believable MVP quickly

That realization reduced a lot of pressure because I stopped trying to overengineer everything.

I also had to actively stop myself from polishing tiny UI details for too long. It’s very easy to spend hours tweaking layouts while avoiding harder product decisions. I’m trying to focus more on building the core loop first and refining later.

By the end of the day, the app could:
- collect user input
- process audit logic
- generate recommendations
- estimate potential savings
- display dynamic audit results

This was the first moment where the project genuinely started feeling like a SaaS prototype instead of a frontend exercise.

I’m still learning Next.js as I go, but I’m becoming much more comfortable reading errors, structuring components, and debugging issues incrementally instead of panicking and changing random files.

Overall, today felt like the transition from “setting up a project” to actually building a product.

---

# Day 3 — Audit Engine Refinement & Product Realism

Today focused less on feature quantity and more on improving the realism and credibility of the product experience.

The biggest improvement was restructuring the audit engine from a single static recommendation system into a dynamic recommendation pipeline capable of returning multiple audit insights with confidence scoring and severity levels.

Implemented:
- structured recommendation types
- dynamic audit rendering
- confidence indicators
- severity classification
- savings estimation logic
- workflow-fit heuristics
- spend efficiency heuristics
- positive recommendation handling

A major focus today was making the audit results feel operationally believable rather than artificially “AI-generated.”

The recommendation system was refined around deterministic SaaS optimization logic instead of subjective model comparisons.

Examples of reasoning now include:
- workflow mismatch detection
- high spend-per-seat analysis
- collaboration plan overprovisioning
- efficient workflow alignment
- realistic low-severity recommendations

The frontend audit UI was also upgraded significantly:
- dynamic recommendation cards
- severity badges
- confidence badges
- improved hierarchy and readability
- smoother UX interactions

Additional improvements:
- implemented smooth-scroll CTA behavior
- refined component structure and indentation
- tested multiple realistic audit scenarios
- validated recommendation credibility across workflows

A large amount of time was also spent debugging and stabilizing TypeScript state handling after migrating from static audit objects to typed recommendation arrays.

Overall, Day 3 shifted the project from a prototype-like demo toward a more believable SaaS-style audit product.