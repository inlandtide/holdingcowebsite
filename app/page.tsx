import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./components/ContactForm";
import { Eyebrow, Footer, Header } from "./components/SiteChrome";

const focusAreas = [
  {
    title: "Acquisitions",
    copy: "Majority investments in stable Manufacturing, Distribution, and Industrial companies where dedicated operators can preserve legacy and unlock disciplined growth.",
  },
  {
    title: "Strategic Advisory",
    copy: "Hands-on executive support for high-potential firms, aligning operational expertise with equity-based outcomes and long-term enterprise health.",
  },
  {
    title: "Venture & Growth Capital",
    copy: "Capital and mentorship for founders building scalable companies, especially where technology and modern operating systems create an advantage.",
  },
];

const principles = ["Buy and hold discipline", "Operator-led ownership", "St. Louis-rooted perspective", "Modern systems for enduring companies"];

export default function Home() {
  return (
    <main className="page-shell">
      <Header />

      <section className="relative px-6 pb-20 pt-44 md:px-10 md:pb-28 md:pt-56">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Eyebrow>Private Investment & Holding Company</Eyebrow>
            <h1 className="brand-display mt-7 max-w-5xl text-6xl font-semibold leading-[0.95] tracking-wide md:text-8xl">
              Long-term capital for the next chapter of enduring businesses.
            </h1>
            <div className="gold-rule my-8 w-28" />
            <p className="max-w-2xl text-lg leading-8" style={{ color: "var(--parchment)" }}>
              Inland Tide Holdings partners with established businesses and high-growth startups through direct acquisitions, strategic advisory, and venture capital. We bring operator experience, patient capital, and a St. Louis-born commitment to building durable value.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/#contact" className="border px-7 py-4 text-center text-xs font-semibold uppercase tracking-[0.22em]" style={{ background: "var(--tide-gold)", borderColor: "var(--tide-gold)", color: "var(--inland-navy)" }}>
                Start a Conversation
              </Link>
              <Link href="/about" className="border px-7 py-4 text-center text-xs font-semibold uppercase tracking-[0.22em]" style={{ borderColor: "var(--tide-gold)", color: "var(--tide-gold)" }}>
                Our Story
              </Link>
            </div>
          </div>

          <div className="gold-border p-6 md:p-10">
            <div className="border p-8 md:p-10" style={{ borderColor: "var(--tide-gold)" }}>
              <Image
                src="/brand/inland-tide-logo-inverted.svg"
                alt="Inland Tide Holdings"
                width={320}
                height={114}
                priority
                className="mx-auto h-28 w-auto md:h-36"
              />
              <div className="gold-rule mx-auto my-8 w-20" />
              <p className="brand-display text-center text-3xl font-semibold leading-tight md:text-4xl">
                Acquisitions · Advisory · Venture
              </p>
              <p className="mt-6 text-center text-sm uppercase tracking-[0.24em] gold-text">
                Built in St. Louis
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="light-section px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <Eyebrow>Core Focus Areas</Eyebrow>
              <h2 className="brand-display mt-5 text-5xl font-semibold leading-none md:text-6xl">
                Built for continuity, scale, and thoughtful growth.
              </h2>
            </div>
            <p className="text-lg leading-8 slate-text">
              We are focused on companies where operational depth matters: owner-operated businesses seeking continuity, select organizations ready for aligned advisory support, and founders who benefit from capital plus practical mentorship.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {focusAreas.map((area) => (
              <article key={area.title} className="focus-card p-8">
                <p className="text-xs uppercase tracking-[0.24em] gold-text">Focus</p>
                <h3 className="brand-display mt-5 text-4xl font-semibold">{area.title}</h3>
                <p className="mt-5 text-sm leading-7 slate-text">{area.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="gold-border p-8 md:p-12">
            <Eyebrow>Operator Perspective</Eyebrow>
            <h2 className="brand-display mt-5 text-5xl font-semibold leading-none md:text-6xl">
              We know what it means to build, lead, and exit a company.
            </h2>
            <p className="mt-8 text-lg leading-8" style={{ color: "var(--parchment)" }}>
              Inland Tide was founded by Tim Hebel and Ryan Hall after helping lead Beanstalk Web Solutions to a successful exit in 2026. The firm exists to apply that operating experience to traditional companies, growth ventures, and partnerships where aligned incentives matter.
            </p>
            <Link href="/about" className="mt-10 inline-flex border px-7 py-4 text-xs font-semibold uppercase tracking-[0.22em]" style={{ borderColor: "var(--tide-gold)", color: "var(--tide-gold)" }}>
              Meet the Partners
            </Link>
          </div>
          <div className="grid gap-4">
            {principles.map((principle, index) => (
              <div key={principle} className="flex items-center gap-6 border p-6" style={{ borderColor: "var(--tide-gold)" }}>
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
            <Eyebrow>Contact</Eyebrow>
            <h2 className="brand-display mt-5 text-5xl font-semibold leading-none md:text-6xl">
              Let’s discuss the next chapter.
            </h2>
            <p className="mt-7 text-lg leading-8 slate-text">
              Whether you are considering succession, seeking an operating partner, exploring advisory alignment, or building a company that needs capital and mentorship, we welcome thoughtful conversations.
            </p>
          </div>
          <div className="gold-border bg-white p-6 md:p-10">
            <ContactForm variant="light" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
