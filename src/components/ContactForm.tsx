"use client";

import { FormEvent, useState } from "react";
import SuccessToast from "./SuccessToast";

// Stroked glyphs on the same 24x24 grid as Icon.tsx: one per field, the chat
// bubble in the heading pill, and the arrow in the button.
const icons = {
  chat: "M21 11.5a8.4 8.4 0 0 1-8.5 8.5 9 9 0 0 1-3.8-.8L3 21l1.8-5.7A8.5 8.5 0 0 1 12.5 3 8.4 8.4 0 0 1 21 11.5z",
  user: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 6l-10 7L2 6",
  notes: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  arrow: "M5 12h14M13 6l6 6-6 6",
};

// The two halves of the paper plane, filled: the crease splits it into a lit and
// a shaded wing, which is what makes it read as folded paper.
const plane = ["M22 2 11 13 2 9z", "M22 2 15 22 11 13z"];

// The three promises under the form (see the list at the bottom of the panel).
const perks = [
  {
    title: "Quick response",
    body: "Within 1 hour",
    icon: "M13 2 3.5 13.5h7L10 22l9.5-11.5h-7z",
  },
  {
    title: "Clear communication",
    body: "No hidden costs",
    icon: "M12 3l7.5 3v5.6c0 4.6-3.1 7.8-7.5 8.9-4.4-1.1-7.5-4.3-7.5-8.9V6z",
  },
  {
    title: "Long-term support",
    body: "Even after delivery",
    icon: "M12 20.5S4 16.1 4 10.6A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 8 2.6c0 5.5-8 9.9-8 9.9z",
  },
];

// One field shell: the glyph, the label and the control all live inside a single
// bordered box, so the whole box is the hit area (each `label` wraps its
// control). `focus-within` lights the box up, which is why the control itself
// carries no border of its own.
const shell =
  "flex gap-3 rounded-2xl border border-line bg-panel/60 p-3.5 transition focus-within:border-accent focus-within:bg-panel focus-within:ring-[3px] focus-within:ring-accent/20";
const control =
  "w-full bg-transparent text-fg outline-none placeholder:text-muted/70";
const label = "block text-[0.82rem] font-bold text-fg";
const star = (
  <span className="text-accent" aria-hidden="true">
    {" "}
    *
  </span>
);

function FieldIcon({ d }: { d: string }) {
  return (
    <svg
      className="mt-1 h-[18px] w-[18px] flex-none text-accent"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

export default function ContactForm() {
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setNote("Fill in your name, email and project details.");
      return;
    }
    try {
      setLoading(true);
      setError("");
      const response = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
      form.reset();
      setToastOpen(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    setNote("Your email app should open with the message ready to send.");
  };

  return (
    <div className="spot relative overflow-hidden rounded-[26px] border border-line bg-panel/75 p-[clamp(1.25rem,2.6vw,2.1rem)] shadow-[0_30px_70px_-34px_rgb(2_6_23/0.6)] backdrop-blur-sm">
      {/* Two soft light sources, one per corner, so the panel glows the way the
          rest of the page does. Decorative, so they sit under the copy. */}
      <span
        className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-halo/25 blur-3xl"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-panel2/70 px-3 py-1.5 text-[0.78rem] font-bold text-fg">
          <svg
            className="h-[15px] w-[15px] flex-none text-accent"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d={icons.chat} />
          </svg>
          Send a Message
        </p>

        <h3 className="mt-3 text-[clamp(1.35rem,2.4vw,1.8rem)] leading-tight">
          Start a conversation
        </h3>
        <p className="mt-2.5 max-w-[52ch] text-[0.95rem] text-muted">
          Share a few details about your project, and I&apos;ll get back to you
          with the next steps.
        </p>

        <form onSubmit={onSubmit} noValidate className="mt-6 grid gap-3.5">
          <div className="grid gap-3.5 sm:grid-cols-2">
            <label className={shell}>
              <FieldIcon d={icons.user} />
              <span className="grid min-w-0 flex-1 gap-1">
                <span className={label}>
                  Name
                  {star}
                </span>
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Your name"
                  className={control}
                />
              </span>
            </label>
            <label className={shell}>
              <FieldIcon d={icons.mail} />
              <span className="grid min-w-0 flex-1 gap-1">
                <span className={label}>
                  Email
                  {star}
                </span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className={control}
                />
              </span>
            </label>
          </div>

          <label className={shell}>
            <FieldIcon d={icons.notes} />
            <span className="grid min-w-0 flex-1 gap-1">
              <span className={label}>
                Project details
                {star}
              </span>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell me about your project, goals, timeframe, and any specific requirements…"
                className={`${control} min-h-[110px] resize-y`}
              />
            </span>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary disabled:bg-red-500 mt-1 w-full gap-2.5 rounded-2xl bg-gradient-to-r from-btn via-accent to-halo px-6 py-3.5 text-[0.98rem]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[18px] w-[18px] flex-none"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d={plane[0]} />
              <path d={plane[1]} className="opacity-60" />
            </svg>
            {loading ? "Sending..." : "Send message"}
            <svg
              className="h-4 w-4 flex-none"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d={icons.arrow} />
            </svg>
          </button>

          <p role="status" className="min-h-[1.5em] text-[0.9rem] text-muted">
            {note}
          </p>
        </form>
        <SuccessToast
          open={toastOpen}
          onClose={() => setToastOpen(false)}
          title="Message sent"
          message="Thanks for reaching out. I'll reply within a day."
        />
      </div>
    </div>
  );
}
