import Link from "next/link";
import { Eyebrow, Footer, Header, PageIntro } from "../components/SiteChrome";

const portfolioItems = [
  {
    name: "Moulding STL",
    status: "Current Portfolio Company",
    focus: "St. Louis moulding and architectural finish solutions.",
    copy: "Moulding STL is currently part of the Inland Tide portfolio, reflecting the firm’s interest in practical, service-driven businesses with durable local demand and opportunities for disciplined operational growth.",
    href: "https://mouldingstl.com/",
  },
  {
    name: "St. Louis Manufacturing Acquisition",
    status: "Under Contract",
    focus: "Manufacturing company in the St. Louis region.",
    copy: "Inland Tide is currently under contract to acquire a manufacturing firm in St. Louis. Additional information is expected later this summer as the transaction process advances.",
    href: "",
  },
];

const criteria = [
  {
    title: "Industry Fit",
    copy: "Manufacturing, Industrial, and Distribution companies where operational improvements and long-term stewardship can compound value.",
  },
  {
    title: "Ownership Context",
    copy: "Founder-led or owner-operated companies seeking succession, continuity, or a partner capable of protecting what has already been built.",
  },
  {
    title: "Business Quality",
    copy: "Stable, profitable businesses with loyal customers, dependable teams, and practical opportunities for modernization.",
  },
  {
    title: "Partnership Alignment",
    copy: "Advisory and venture relationships where capital, expertise, and incentives are structured for shared long-term outcomes.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="page-shell">
      <Header />
      <PageIntro
        eyebrow="Portfolio"
        title="A growing collection of durable companies and aligned partnerships."
        copy="Inland Tide Holdings is building a long-term portfolio anchored in St. Louis, practical operations, and patient value creation."
      />

      <section className="light-section px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <Eyebrow>Current Portfolio</Eyebrow>
              <h2 className="brand-display mt-5 text-5xl font-semibold leading-none md:text-6xl">
                Companies we are building for the long term.
              </h2>
            </div>
            <p className="text-lg leading-8 slate-text">
              Our portfolio will grow carefully. We prioritize businesses where active ownership, operational systems, and founder-respecting transitions can produce durable outcomes for employees, customers, and communities.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {portfolioItems.map((item) => (
              <article key={item.name} className="focus-card p-8 md:p-10">
                <p className="text-xs uppercase tracking-[0.24em] gold-text">{item.status}</p>
                <h3 className="brand-display mt-5 text-5xl font-semibold">{item.name}</h3>
                <div className="gold-rule my-7 w-20" />
                <p className="text-base font-semibold leading-7" style={{ color: "var(--inland-navy)" }}>{item.focus}</p>
                <p className="mt-5 text-base leading-8 slate-text">{item.copy}</p>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer" className="mt-8 inline-flex border px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em]" style={{ borderColor: "var(--tide-gold)", color: "var(--inland-navy)" }}>
                    Visit Website
                  </a>
                ) : (
                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] gold-text">More information coming later summer</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <Eyebrow>Investment Criteria</Eyebrow>
            <h2 className="brand-display mt-5 text-5xl font-semibold leading-none md:text-6xl">
              What we look for in a partnership.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {criteria.map((item, index) => (
              <article key={item.title} className="gold-border p-8">
                <p className="brand-display text-4xl font-semibold gold-text">0{index + 1}</p>
                <h3 className="brand-display mt-5 text-4xl font-semibold">{item.title}</h3>
                <p className="mt-5 text-base leading-8" style={{ color: "var(--parchment)" }}>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="light-section px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <Eyebrow>Opportunities</Eyebrow>
          <h2 className="brand-display mt-5 text-5xl font-semibold leading-none md:text-6xl">
            Know a business ready for its next chapter?
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 slate-text">
            We welcome conversations with owners, advisors, founders, and investors who value confidentiality, clarity, and long-term thinking.
          </p>
          <Link href="/#contact" className="mt-10 inline-flex border px-7 py-4 text-xs font-semibold uppercase tracking-[0.22em]" style={{ background: "var(--tide-gold)", borderColor: "var(--tide-gold)", color: "var(--inland-navy)" }}>
            Start a Conversation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
