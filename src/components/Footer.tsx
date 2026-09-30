import type { ContactChannel } from "@/data/site";
import { contactChannels, footerLinks, site, socials } from "@/data/site";
import Image from "next/image";
import Icon from "./Icon";
import SocialIcon from "./SocialIcon";

// Stroked glyphs for the contact column (24x24 grid, stroked the way Icon.tsx
// draws). Brand channels (Fiverr, LinkedIn, GitHub) are filled marks from
// SocialIcon instead, so this map holds only the generic ones.
const glyphs = {
  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 6l-10 7L2 6",
  phone:
    "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
  resume: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3",
};
type Glyph = keyof typeof glyphs;
const isGlyph = (icon: ContactChannel["icon"]): icon is Glyph => icon in glyphs;

// Two shapes keep the three columns identical: a small caps label, and a row.
// `-mx-2` + `px-2` keeps the text flush with the label above it while giving the
// spotlight beam room to sit around the word instead of hugging it.
const label =
  "font-display text-[0.78rem] font-bold uppercase tracking-[0.16em] text-fg";
const row = "inline-flex items-center gap-2 py-1.5 font-semibold";
const rowLink = `${row} spot -mx-2 rounded-lg px-2 transition hover:text-accent`;

export default function Footer() {
  // The `tel:` href is built in site.ts. A placeholder or malformed number would
  // turn into a dead link, so the phone row stays text until there are enough
  // digits to actually dial.
  const dialable = (site.phone.match(/\d/g) ?? []).length >= 7;

  return (
    <footer className="relative overflow-hidden border-t border-line text-[0.95rem] text-muted">
      {/* Subtle glowing accent line running along the very top border */}
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        aria-hidden="true"
      />

      {/* Massive subtle watermark of the initials in the footer backdrop */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 select-none font-display text-[clamp(6rem,22vw,16rem)] font-black leading-none tracking-tighter text-fg/[0.025]"
      >
        {site.name.slice(0, 2).toUpperCase()}
      </span>

      {/* The bottom padding is deliberately larger than the top one: it keeps the
          last row clear of the fixed back-to-top button. */}
      <div className="wrap relative grid gap-[clamp(2.25rem,5vw,3.5rem)] pb-[clamp(72px,7vw,88px)] pt-[clamp(40px,6vw,56px)]">
        <div className="grid gap-9 md:grid-cols-[1.6fr_1fr_1.05fr] md:gap-8">
          {/* Brand: the same logo as the header, so the page closes as it opened. */}
          <div className="grid justify-items-start gap-4">
            <a
              href="#top"
              aria-label={`${site.name}, back to top`}
              className="flex items-center gap-2.5"
            >
              <Image
                src="/logo.webp"
                alt={`${site.name} logo`}
                width={250}
                height={125}
                className="h-11 w-auto logo-light sm:h-12"
              />
              <Image
                src="/logo-black.webp"
                alt={`${site.name} logo`}
                width={250}
                height={125}
                className="h-11 w-auto logo-dark sm:h-12"
              />
            </a>
            <p className="max-w-[38ch]">
              {site.role} in {site.location}, with {site.experience} of
              experience building fast, reliable websites and web apps.
            </p>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1.5 text-[0.85rem] font-semibold">
              <span
                className="h-2 w-2 flex-none animate-pulse-ring rounded-full bg-[#16a34a]"
                aria-hidden="true"
              />
              {site.availability}
            </span>
          </div>

          {/* Jump links come from the header nav, so both menus stay in sync. */}
          <nav aria-label="Footer" className="grid content-start gap-4">
            <h2 className={label}>Explore</h2>
            <ul className="m-0 grid list-none gap-0.5 p-0">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={rowLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="grid content-start gap-4">
            <h2 className={label}>Get in touch</h2>
            <ul className="m-0 grid list-none gap-0.5 p-0">
              {contactChannels.map((channel) => {
                // A row with no URL yet (the resume until it is set) is skipped.
                if (!channel.href) return null;
                // The placeholder phone number cannot be dialled: keep it text.
                const linkable = channel.icon !== "phone" || dialable;
                // Off-site links open in a new tab; a file in /public downloads.
                const external = channel.href.startsWith("http");
                const inner = (
                  <>
                    {isGlyph(channel.icon) ? (
                      <Icon
                        d={glyphs[channel.icon]}
                        className="h-[18px] w-[18px] flex-none text-accent"
                      />
                    ) : (
                      <SocialIcon
                        name={channel.icon}
                        className="h-[18px] w-[18px] flex-none text-accent"
                      />
                    )}
                    <span className="min-w-0 break-words">{channel.label}</span>
                  </>
                );

                return (
                  <li key={channel.label}>
                    {linkable ? (
                      <a
                        href={channel.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        // A local file downloads under its own name; a
                        // cross-origin URL ignores `download` and opens instead.
                        download={channel.href.startsWith("/") ? "" : undefined}
                        className={rowLink}
                      >
                        {inner}
                      </a>
                    ) : (
                      <span className={row}>{inner}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0 text-[0.9rem]">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <ul className="m-0 flex list-none flex-wrap items-center gap-2.5 p-0">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  aria-label={`${social.label} (opens in a new tab)`}
                  className="spot grid h-10 w-10 place-items-center rounded-xl border border-line bg-panel text-muted transition hover:-translate-y-px hover:border-accent hover:text-accent"
                >
                  <SocialIcon name={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
