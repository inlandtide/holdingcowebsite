"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

export function ContactForm({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const fieldClass = variant === "light" ? "form-field-light" : "form-field";
  const labelColor = variant === "light" ? "var(--river-slate)" : "var(--parchment)";

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const data = await res.json();
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection & try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="gold-border rounded-3xl px-6 py-8 text-center">
        <p className="brand-display text-3xl font-semibold gold-text">Message Received</p>
        <p className="mt-3 text-sm leading-7" style={{ color: labelColor }}>
          Thank you for reaching out. We will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-[0.2em]" style={{ color: labelColor }}>
          Name <span className="gold-text">*</span>
        </label>
        <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Your full name" className={`${fieldClass} rounded-2xl px-4 py-3 text-sm`} />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-[0.2em]" style={{ color: labelColor }}>
            Email <span className="gold-text">*</span>
          </label>
          <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="your@email.com" className={`${fieldClass} rounded-2xl px-4 py-3 text-sm`} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs font-medium uppercase tracking-[0.2em]" style={{ color: labelColor }}>
            Phone
          </label>
          <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Optional" className={`${fieldClass} rounded-2xl px-4 py-3 text-sm`} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-[0.2em]" style={{ color: labelColor }}>
          Message <span className="gold-text">*</span>
        </label>
        <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} placeholder="Tell us about your business, opportunity, or partnership idea." className={`${fieldClass} resize-none rounded-2xl px-4 py-3 text-sm`} />
      </div>
      {status === "error" && (
        <p className="text-sm" style={{ color: "var(--tide-gold)" }}>{errorMessage}</p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full border px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] transition disabled:opacity-60"
        style={{ background: "var(--tide-gold)", borderColor: "var(--tide-gold)", color: "var(--inland-navy)" }}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
