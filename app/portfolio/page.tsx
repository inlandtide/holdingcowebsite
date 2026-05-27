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
    title: "Manufacturing",
    copy: "Stable manufacturing companies with practical products, capable teams, repeat customers, and opportunities to improve systems while protecting the company’s existing legacy.",
  },
  {
    title: "Home Services",
    copy: "Home services and home services-adjacent companies with strong reputations, reliable execution, and durable local or regional demand.",
  },
  {
    title: "Seafood",
    copy: "Seafood processing, distribution, specialty supply, and related businesses where patient ownership can support continuity and long-term growth.",
  },
  {
    title: "Open Opportunities",
    copy: "We are always open to hearing about new and potential acquisition opportunities, including off-market situations and owner-led succession conversations.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="page-shell">
      <Header />
      <PageIntro
        eyebrow="Portfolio & Acquisition Focus"
        title="Building a long-term portfolio through focused acquisitions."
        copy="Inland Tide Holdings is actively seeking manufacturing, home services, and seafood acquisition opportunities while continuing to build a portfolio anchored in practical operations and patient ownership."
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
              Our portfolio will grow carefully. We prioritize acquisition opportunities where active ownership, operational systems, and founder-respecting transitions can produce durable outcomes for employees, customers, and communities.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {portfolioItems.map((item) => (
              <article key={item.name} className="focus-card rounded-3xl p-8 md:p-10">
                <p className="text-xs uppercase tracking-[0.24em] gold-text">{item.status}</p>
                <h3 className="brand-display mt-5 text-5xl font-semibold">{item.name}</h3>
                <div className="gold-rule my-7 w-20" />
                <p className="text-base font-semibold leading-7" style={{ color: "var(--inland-navy)" }}>{item.focus}</p>
                <p className="mt-5 text-base leading-8 slate-text">{item.copy}</p>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full border px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em]" style={{ borderColor: "var(--tide-gold)", color: "var(--inland-navy)" }}>
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
            <Eyebrow>Acquisition Criteria</Eyebrow>
            <h2 className="brand-display mt-5 text-5xl font-semibold leading-none md:text-6xl">
              What we are actively looking to acquire.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {criteria.map((item, index) => (
              <article key={item.title} className="gold-border rounded-3xl p-8">
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
            Know a manufacturing, home services, or seafood business ready for its next chapter?
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 slate-text">
            We welcome conversations with owners, advisors, brokers, founders, and referral partners who value confidentiality, clarity, and long-term thinking.
          </p>
          <Link href="/#contact" className="mt-10 inline-flex rounded-full border px-7 py-4 text-xs font-semibold uppercase tracking-[0.22em]" style={{ background: "var(--tide-gold)", borderColor: "var(--tide-gold)", color: "var(--inland-navy)" }}>
            Share an Opportunity
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
