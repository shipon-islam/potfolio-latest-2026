"use client";

import { site } from "@/lib/site";
import { FormEvent, useState } from "react";

const field =
  "w-full rounded-xl border border-line bg-panel px-4 py-3.5 text-fg transition focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent/20";

export default function ContactForm() {
  const [note, setNote] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setNote("Fill in your name, email and project details.");
      return;
    }

    const body = `${message}\n\n${name}\n${email}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Project inquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
    setNote("Your email app should open with the message ready to send.");
  };

  return (
    <div>
      <div>
        <div className="mt-5 inline-flex items-center gap-2.5 self-start rounded-full border border-line bg-panel px-3.5 py-1.5 text-[0.85rem] font-semibold text-fg">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16a34a] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#16a34a]" />
          </span>
          <span>Let’s talk about your project</span>
        </div>

        <p className="mt-3.5 max-w-[56ch] text-muted">
          Share a few details about your project, and I’ll get back to you with
          the next steps.
        </p>
      </div>
      <form onSubmit={onSubmit} noValidate className="mt-6 grid gap-[18px]">
        <label className="grid gap-2 text-[0.95rem] font-bold">
          Name
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            className={field}
          />
        </label>
        <label className="grid gap-2 text-[0.95rem] font-bold">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className={field}
          />
        </label>
        <label className="grid gap-2 text-[0.95rem] font-bold">
          Project details
          <textarea
            name="message"
            required
            className={`${field} min-h-[150px] resize-y`}
          />
        </label>
        <button type="submit" className="btn btn-primary">
          Send message
        </button>
        <p role="status" className="min-h-[1.5em] text-[0.9rem] text-muted">
          {note}
        </p>
      </form>
    </div>
  );
}
