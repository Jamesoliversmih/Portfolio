"use client";

import { useState } from "react";

const email = "smithjamesoliver1109@gmail.com";

const socials = [
  {
    label: "Email",
    value: email,
    href: `mailto:${email}`,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/smith-james",
    href: "https://www.linkedin.com/in/smith-james-a2166740b",
  },
  {
    label: "GitHub",
    value: "github.com/Jamesoliversmih",
    href: "https://github.com/Jamesoliversmih",
  },
];

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", from: "", message: "", company: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Try again.");
        return;
      }

      setStatus("sent");
      setForm({ name: "", from: "", message: "", company: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Check your connection and try again.");
    }
  }

  return (
    <section id="contact" className="bg-paper">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-10">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Contact
          </h2>
          <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-muted">
            Open to Level 1/2 IT support roles and junior full-stack
            positions. Send a message and I'll reply from{" "}
            <span className="text-ink">{email}</span>.
          </p>
          <ul className="mt-8 space-y-4">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.label === "Email" ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group flex items-center gap-3 text-sm"
                >
                  <span className="font-mono text-xs text-muted">
                    {social.label}
                  </span>
                  <span className="text-ink transition-colors group-hover:text-accent">
                    {social.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-line bg-surface p-8"
        >
          <div>
            <label htmlFor="name" className="text-xs text-muted">
              Name
            </label>
            <input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 w-full rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink outline-none transition-colors focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="from" className="text-xs text-muted">
              Your email
            </label>
            <input
              id="from"
              type="email"
              required
              value={form.from}
              onChange={(e) => setForm({ ...form, from: e.target.value })}
              className="mt-1 w-full rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink outline-none transition-colors focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-xs text-muted">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1 w-full rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink outline-none transition-colors focus:border-accent"
            />
          </div>

          {/* Honeypot field: hidden from real visitors, bots tend to fill it in. */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              tabIndex={-1}
              autoComplete="off"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-md bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-accent" role="status">
              Thanks — your message is on its way. I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600" role="alert">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
