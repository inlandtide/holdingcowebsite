import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 px-6 py-6 md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 border-b pb-5" style={{ borderColor: "var(--tide-gold)" }}>
        <Link href="/" aria-label="Inland Tide Holdings home" className="flex items-center">
          <Image
            src="/brand/inland-tide-logo-inverted.svg"
            alt="Inland Tide Holdings"
            width={260}
            height={92}
            priority
            className="h-14 w-auto md:h-16"
          />
        </Link>
        <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.22em] md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="hidden border px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] transition md:inline-flex"
          style={{ borderColor: "var(--tide-gold)", color: "var(--tide-gold)" }}
        >
          Share an Opportunity
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t px-6 py-12 md:px-10" style={{ borderColor: "var(--tide-gold)" }}>
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Image
            src="/brand/inland-tide-logo-inverted.svg"
            alt="Inland Tide Holdings"
            width={260}
            height={92}
            className="h-16 w-auto"
          />
          <p className="mt-6 max-w-md text-sm leading-7" style={{ color: "var(--parchment)" }}>
            Inland Tide Holdings is a St. Louis private investment and holding company actively seeking manufacturing, construction, and seafood acquisition opportunities.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] gold-text">Navigate</p>
          <div className="mt-5 grid gap-3 text-sm">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:gold-text">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] gold-text">Headquarters</p>
          <p className="mt-5 text-sm leading-7" style={{ color: "var(--parchment)" }}>
            Built in St. Louis by operators who are always open to hearing about new and potential business acquisition opportunities.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t pt-6 text-xs uppercase tracking-[0.18em] md:flex-row md:items-center md:justify-between" style={{ borderColor: "var(--tide-gold)", color: "var(--parchment)" }}>
        <p>&copy; {new Date().getFullYear()} Inland Tide Holdings. All rights reserved.</p>
        <p>Manufacturing · Construction · Seafood</p>
      </div>
    </footer>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.3em] gold-text">
      {children}
    </p>
  );
}

export function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <section className="px-6 pb-20 pt-44 md:px-10 md:pb-28 md:pt-52">
      <div className="mx-auto max-w-5xl text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="brand-display mt-6 text-5xl font-semibold leading-none tracking-wide md:text-7xl">
          {title}
        </h1>
        <div className="gold-rule mx-auto my-8 w-24" />
        <p className="mx-auto max-w-3xl text-lg leading-8" style={{ color: "var(--parchment)" }}>
          {copy}
        </p>
      </div>
    </section>
  );
}
