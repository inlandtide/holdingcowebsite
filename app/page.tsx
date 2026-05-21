"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      style={{ background: "var(--background)" }}
    >
      {/* Logo / Wordmark */}
      <div className="mb-10 text-center">
        <p
          className="text-xs tracking-[0.35em] uppercase mb-3"
          style={{ color: "var(--accent)", fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Est. 2024
        </p>
        <h1
          className="text-5xl md:text-7xl font-light tracking-wide"
          style={{
            color: "var(--foreground)",
            fontFamily: "var(--font-cormorant), Georgia, serif",
            letterSpacing: "0.06em",
          }}
        >
          Inland Tide Holdings
        </h1>
        <div
          className="mx-auto mt-5 mb-5"
          style={{ width: "60px", height: "1px", background: "var(--accent)" }}
        />
        <p
          className="text-lg md:text-xl font-light tracking-widest uppercase"
          style={{ color: "var(--muted)", fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Coming Soon
        </p>
      </div>

      {/* Divider */}
      <div
        className="w-full max-w-md mb-12"
        style={{ height: "1px", background: "var(--surface)" }}
      />

      {/* Contact Form */}
      <section className="w-full max-w-md">
        <h2
          className="text-2xl font-light text-center mb-2 tracking-wide"
          style={{ color: "var(--foreground)", fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Get in Touch
        </h2>
        <p
          className="text-sm text-center mb-8 tracking-wide"
          style={{ color: "var(--muted)" }}
        >
          {"We'd love to hear from you. Leave your details and we'll be in touch."}
        </p>

        {status === "success" ? (
          <div
            className="rounded-sm px-6 py-8 text-center"
            style={{ background: "var(--surface)", border: "1px solid var(--accent)" }}
          >
            <p
              className="text-xl font-light mb-2"
              style={{ color: "var(--accent)", fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Message Received
            </p>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              Thank you for reaching out. We will be in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-xs tracking-widest uppercase mb-1"
                style={{ color: "var(--muted)" }}
              >
                Name <span style={{ color: "var(--accent)" }}>*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-4 py-3 text-sm outline-none transition-all"
                style={{
                  background: "var(--surface)",
                  color: "var(--foreground)",
                  border: "1px solid #1E3450",
                  borderRadius: "2px",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#1E3450")}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs tracking-widest uppercase mb-1"
                style={{ color: "var(--muted)" }}
              >
                Email <span style={{ color: "var(--accent)" }}>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 text-sm outline-none transition-all"
                style={{
                  background: "var(--surface)",
                  color: "var(--foreground)",
                  border: "1px solid #1E3450",
                  borderRadius: "2px",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#1E3450")}
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs tracking-widest uppercase mb-1"
                style={{ color: "var(--muted)" }}
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(optional)"
                className="w-full px-4 py-3 text-sm outline-none transition-all"
                style={{
                  background: "var(--surface)",
                  color: "var(--foreground)",
                  border: "1px solid #1E3450",
                  borderRadius: "2px",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#1E3450")}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs tracking-widest uppercase mb-1"
                style={{ color: "var(--muted)" }}
              >
                Message <span style={{ color: "var(--accent)" }}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                className="w-full px-4 py-3 text-sm outline-none transition-all resize-none"
                style={{
                  background: "var(--surface)",
                  color: "var(--foreground)",
                  border: "1px solid #1E3450",
                  borderRadius: "2px",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#1E3450")}
              />
            </div>

            {status === "error" && (
              <p className="text-xs text-center" style={{ color: "#E57373" }}>
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-3 text-xs tracking-widest uppercase font-medium transition-all disabled:opacity-50"
              style={{
                background: "var(--accent)",
                color: "var(--background)",
                borderRadius: "2px",
                letterSpacing: "0.2em",
              }}
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center">
        <p className="text-xs tracking-widest" style={{ color: "var(--muted)" }}>
          &copy; {new Date().getFullYear()} Inland Tide Holdings. All rights reserved.
        </p>
      </footer>

      {/* Connector test */}
      <p className="mt-4 text-xs" style={{ color: "var(--muted)" }}>hello world</p>
    </main>
  );
}
