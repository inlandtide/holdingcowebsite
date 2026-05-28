import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./components/ContactForm";
import { Eyebrow, Footer, Header } from "./components/SiteChrome";

const focusAreas = [
  {
    title: "Manufacturing & Industrial",
    copy: "We seek stable Manufacturing & Industrial companies with practical products, dependable teams, repeat customers, & opportunities to strengthen operations without disrupting the legacy already built.",
  },
  {
    title: "Home Services",
    copy: "We are interested in home services & adjacent businesses where strong execution, reputation, & local market knowledge create durable value.",
  },
  {
    title: "Food Production & Distribution",
    copy: "We welcome conversations with food production & distribution businesses across processing, logistics, specialty supply, & related operating models where patient ownership can support the next stage of growth.",
  },
];

const principles = [
  "Manufacturing & Industrial acquisition opportunities",
  "Home services acquisition opportunities",
  "Food production & distribution acquisition opportunities",
  "Owner conversations & referrals",
];

export default function Home() {
  return (
    <main className="page-shell">
      <Header />

      <section className="relative flex min-h-[72vh] items-center justify-center overflow-hidden px-6 pb-[1.875rem] pt-[7.0125rem] md:px-10 md:pb-[2.625rem] md:pt-[8.925rem]" style={{ background: "var(--inland-navy)" }}>
        <Image
          src="/brand/inland-tide-archbridge-hero.avif"
          alt="St. Louis riverfront and Gateway Arch viewed from beneath a bridge"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(24, 44, 78, 0.865)" }} />
        <div className="relative z-10 w-full max-w-5xl rounded-[2rem] px-6 pb-[0.9375rem] pt-[1.59375rem] md:px-10 md:pb-6 md:pt-[2.55rem]">
          <div>
            <h1 className="sr-only">Inland Tide Holdings</h1>
            <Image
              src="/brand/inland-tide-logo-inverted.svg"
              alt="Inland Tide Holdings"
              width={640}
              height={228}
              priority
              className="mx-auto h-auto w-full max-w-[720px]"
            />
            <div className="gold-rule mx-auto my-10 w-24" />
            <p className="text-center text-sm uppercase tracking-[0.24em] gold-text">
              Built in St. Louis
            </p>
          </div>
        </div>
      </section>
      <section className="px-6 py-6 md:px-10" style={{ background: "var(--inland-navy)" }}>
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-full border md:grid-cols-3" style={{ borderColor: "var(--tide-gold)" }}>
          {["Acquisitions", "Advisory", "Venture"].map((item) => (
            <div key={item} className="flex items-center justify-center gap-3 border-t px-6 py-7 text-center md:border-l md:border-t-0 first:md:border-l-0" style={{ borderColor: "var(--tide-gold)" }}>
              <span className="text-sm gold-text">◆</span>
              <p className="text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: "var(--arch-white)" }}>{item}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="light-section px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="brand-display text-6xl font-semibold leading-none tracking-wide md:text-8xl">
              Acquisition Targets
            </h2>
            <div className="gold-rule mx-auto my-8 w-24" />
            <p className="mx-auto max-w-4xl text-xl leading-9 slate-text md:text-2xl md:leading-10">
              Inland Tide Holdings is actively looking for acquisition opportunities where strong operators, patient capital, & a long-term ownership mindset can preserve what works & support the next chapter of growth. We are always open to hearing about new, potential, & off-market opportunities.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {focusAreas.map((area) => (
              <article key={area.title} className="focus-card rounded-3xl p-8">
                <p className="text-xs uppercase tracking-[0.24em] gold-text">Target Sector</p>
                <h3 className="brand-display mt-5 text-4xl font-semibold">{area.title}</h3>
                <p className="mt-5 text-sm leading-7 slate-text">{area.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="gold-border rounded-3xl p-8 md:p-12">
            <Eyebrow>Open to Opportunities</Eyebrow>
            <h2 className="brand-display mt-5 text-5xl font-semibold leading-none md:text-6xl">
              If you know a business owner thinking about what comes next, we would like to talk.
            </h2>
            <p className="mt-8 text-lg leading-8" style={{ color: "var(--parchment)" }}>
              We welcome direct conversations with owners, introductions from advisors, & referrals from people who know quality businesses in our target sectors. Our approach is confidential, respectful, & focused on long-term continuity for employees, customers, & the owner’s legacy.
            </p>
            <Link href="/#contact" className="mt-10 inline-flex rounded-full border px-7 py-4 text-xs font-semibold uppercase tracking-[0.22em]" style={{ borderColor: "var(--tide-gold)", color: "var(--tide-gold)" }}>
              Share an Opportunity
            </Link>
          </div>
          <div className="grid gap-4">
            {principles.map((principle, index) => (
              <div key={principle} className="flex items-center gap-6 rounded-2xl border p-6" style={{ borderColor: "var(--tide-gold)" }}>
                <span className="brand-display text-4xl font-semibold gold-text">0{index + 1}</span>
                <p className="text-sm font-medium uppercase tracking-[0.2em]">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="light-section px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Eyebrow>Acquisition Conversations</Eyebrow>
            <h2 className="brand-display mt-5 text-5xl font-semibold leading-none md:text-6xl">
              Tell us about a business acquisition opportunity.
            </h2>
            <p className="mt-7 text-lg leading-8 slate-text">
              If you are an owner, advisor, broker, founder, or referral partner with a potential Manufacturing & Industrial, Home Services, Food Production & Distribution, or related operating business opportunity, please reach out. We are always open to a thoughtful first conversation.
            </p>
          </div>
          <div className="gold-border rounded-3xl bg-white p-6 md:p-10">
            <ContactForm variant="light" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
