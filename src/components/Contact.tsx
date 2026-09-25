import { site } from "@/lib/site";
import type { CSSProperties } from "react";
import ContactForm from "./ContactForm";
import ResumeButton from "./ResumeButton";
import SocialIcon from "./SocialIcon";

const links = [
  {
    label: "Fiverr",
    icon: "fiverr" as const,
    hint: "Level 1 seller · order directly",
    href: site.links.fiverr,
  },
  {
    label: "GitHub",
    icon: "github" as const,
    hint: "github.com/shipon1998",
    href: site.links.github,
  },
  {
    label: "LinkedIn",
    icon: "linkedin" as const,
    hint: "Connect with me",
    href: site.links.linkedin,
  },
  {
    label: "Email",
    icon: "mail" as const,
    hint: site.email,
    href: `mailto:${site.email}`,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section relative overflow-hidden"
    >
      <span
        className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="wrap ">
        <div>
          <span className="font-display text-[0.82rem] font-bold uppercase tracking-[0.18em] text-accent">
            Get in touch
          </span>
          <h2
            id="contact-title"
            className="mt-2 text-[clamp(1.75rem,3.4vw,2.4rem)] leading-tight tracking-tight"
          >
            Let’s build something. From idea to production
          </h2>
        </div>
        <div className="mt-6 relative grid gap-[clamp(2.5rem,6vw,5rem)] md:grid-cols-[0.95fr_1.05fr]">
          <div data-reveal className="flex flex-col">
            <div className="mt-5 inline-flex items-center gap-2.5 self-start rounded-full border border-line bg-panel px-3.5 py-1.5 text-[0.85rem] font-semibold text-fg">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16a34a] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#16a34a]" />
              </span>
              <span>Available for freelance work and full-time roles</span>
            </div>
            <p className="mt-3.5 max-w-[56ch] text-muted">
              Tell me about the project and I&apos;ll reply with questions, a
              rough plan and a timeline. Websites, web apps, APIs, Python
              scripts, Docker setups or n8n automations are all fine.
            </p>

            <div className="mt-7 grid gap-2">
              {links.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={
                    channel.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    channel.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="spot group flex items-center justify-between rounded-xl border border-line bg-panel p-3.5 transition duration-200 hover:-translate-y-0.5 hover:border-accent"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-panel2 text-accent ring-1 ring-inset ring-line transition group-hover:bg-accent/10">
                      {channel.icon === "mail" ? (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                          <path d="m22 6-10 7L2 6" />
                        </svg>
                      ) : (
                        <SocialIcon name={channel.icon} className="h-4 w-4" />
                      )}
                    </span>
                    <div>
                      <p className="text-[0.95rem] font-semibold text-fg transition group-hover:text-accent">
                        {channel.label}
                      </p>
                      <p className="text-[0.82rem] text-muted">
                        {channel.hint}
                      </p>
                    </div>
                  </div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-muted transition duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              ))}
            </div>

            <div className="mt-6 hidden">
              <ResumeButton />
            </div>

            <div className="mt-6 flex items-center gap-4 rounded-2xl border border-line bg-panel/70 p-4">
              <span className="relative grid h-14 w-14 flex-none place-items-center rounded-xl bg-panel2 text-accent">
                <svg
                  viewBox="0 0 120 120"
                  className="h-10 w-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="60" cy="60" r="48" />
                  <ellipse cx="60" cy="60" rx="22" ry="48" />
                  <path d="M12 60h96M22 34h76M22 86h76" />
                </svg>
                <span
                  className="absolute right-3.5 top-3.5 h-2 w-2 rounded-full bg-[#16a34a] ring-4 ring-emerald-500/20"
                  aria-hidden="true"
                />
              </span>
              <div>
                <p className="font-display text-[0.95rem] font-semibold text-fg">
                  Based in {site.location}
                </p>
                <p className="text-[0.85rem] text-muted">
                  GMT+6 · working with teams and clients worldwide
                </p>
              </div>
            </div>
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
