import Link from "next/link";
import { Eyebrow, Footer, Header, PageIntro } from "../components/SiteChrome";

const leaders = [
  {
    name: "Tim Hebel",
    title: "Operator & Investor",
    bio: "Tim is dedicated to acquiring and scaling the businesses that form the backbone of the economy. After fourteen years as founder and owner of Beanstalk Web Solutions, which he led to a successful exit in 2026, Tim began a new chapter with Inland Tide Holdings: building a portfolio focused on long-term acquisitions and strategic growth.",
    perspective: "His career has been shaped by early adoption and technical depth, from studying Computer Science with an emphasis on AI to investing in Bitcoin in 2011. At Inland Tide, he applies that forward-looking lens to traditional, owner-operated businesses through modern systems, patient ownership, and a buy-and-hold philosophy.",
  },
  {
    name: "Ryan Hall",
    title: "Operator & Partner",
    bio: "Ryan was born and raised in St. Louis and now lives in Ballwin with his wife and two children. After serving five years as President of Beanstalk Web Solutions, he helped lead the company through a successful sale in early 2026 before launching Inland Tide Holdings with a focus on long-term acquisitions and strategic growth.",
    perspective: "Ryan brings a practical operator’s mindset to Inland Tide’s acquisitions, advisory work, and venture investments. Outside of work, his family spends time on the motocross track and exploring St. Louis, reinforcing the local roots that inform the firm’s long-term commitment to the region.",
  },
];

const values = [
  "Preserve the legacy of founder-led businesses.",
  "Operate with aligned incentives and direct accountability.",
  "Use modern technology where it strengthens durable fundamentals.",
  "Build a portfolio that benefits employees, customers, founders, and communities.",
];

export default function AboutPage() {
  return (
    <main className="page-shell">
      <Header />
      <PageIntro
        eyebrow="About Inland Tide"
        title="A holding company built by operators, not spectators."
        copy="Inland Tide Holdings was formed in St. Louis by Tim Hebel and Ryan Hall to acquire, partner with, and invest in businesses where operational discipline and long-term alignment can create enduring value."
      />

      <section className="light-section px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Eyebrow>Our Perspective</Eyebrow>
            <h2 className="brand-display mt-5 text-5xl font-semibold leading-none md:text-6xl">
              Patient capital, hands-on leadership, and St. Louis roots.
            </h2>
          </div>
          <div className="grid gap-8 text-lg leading-8 slate-text">
            <p>
              Inland Tide is a private investment and holding company focused on long-term value creation through direct acquisitions, strategic partnerships, and venture capital. We partner with established businesses and high-growth startups to provide the operational expertise and capital necessary for their next chapter.
            </p>
            <p>
              Our focus is intentionally practical: stable, profitable businesses in Manufacturing, Industrial, and Distribution; select advisory relationships where equity alignment creates shared outcomes; and venture opportunities where technology, mentorship, and disciplined execution can help founders scale efficiently.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="brand-display mt-5 text-5xl font-semibold leading-none md:text-6xl">
              Meet the partners.
            </h2>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {leaders.map((leader) => (
              <article key={leader.name} className="gold-border p-8 md:p-10">
                <p className="text-xs uppercase tracking-[0.24em] gold-text">{leader.title}</p>
                <h3 className="brand-display mt-4 text-5xl font-semibold">{leader.name}</h3>
                <div className="gold-rule my-7 w-20" />
                <p className="text-base leading-8" style={{ color: "var(--parchment)" }}>{leader.bio}</p>
                <p className="mt-6 text-base leading-8" style={{ color: "var(--parchment)" }}>{leader.perspective}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="light-section px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Eyebrow>Operating Values</Eyebrow>
            <h2 className="brand-display mt-5 text-5xl font-semibold leading-none md:text-6xl">
              The standards behind every partnership.
            </h2>
            <Link href="/portfolio" className="mt-10 inline-flex border px-7 py-4 text-xs font-semibold uppercase tracking-[0.22em]" style={{ borderColor: "var(--tide-gold)", color: "var(--inland-navy)" }}>
              View Portfolio
            </Link>
          </div>
          <div className="grid gap-4">
            {values.map((value, index) => (
              <div key={value} className="flex gap-5 border p-6" style={{ borderColor: "var(--tide-gold)" }}>
                <span className="brand-display text-4xl font-semibold gold-text">0{index + 1}</span>
                <p className="self-center text-base leading-7 slate-text">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
