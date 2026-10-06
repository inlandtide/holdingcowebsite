"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";

type NavigationItem = {
  href: string;
  label: string;
};

export function MobileNavigation({ items }: { items: NavigationItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2"
        style={{ borderColor: "var(--tide-gold)", color: "var(--tide-gold)", outlineColor: "var(--tide-gold)" }}
      >
        <span className="sr-only">{isOpen ? "Close navigation menu" : "Open navigation menu"}</span>
        {isOpen ? (
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6">
            <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6">
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      {isOpen ? (
        <nav
          id={menuId}
          aria-label="Mobile navigation"
          className="absolute left-6 right-6 top-full z-30 mt-1 overflow-hidden rounded-2xl border p-2 shadow-2xl"
          style={{ background: "var(--inland-navy)", borderColor: "var(--tide-gold)" }}
        >
          <div className="grid gap-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-5 py-4 text-xs font-semibold uppercase tracking-[0.22em] transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-[-2px]"
                style={{ color: "var(--parchment)", outlineColor: "var(--tide-gold)" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="mt-1 rounded-xl px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.2em] transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-[-2px]"
              style={{ background: "var(--tide-gold)", color: "var(--inland-navy)", outlineColor: "var(--arch-white)" }}
            >
              Share an Opportunity
            </Link>
          </div>
        </nav>
      ) : null}
    </div>
  );
}
