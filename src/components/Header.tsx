"use client";

import { useMemo } from "react";
import { nav, site } from "@/lib/site";
import Image from "next/image";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Header() {
  const sectionIds = useMemo(
    () => nav.map((item) => item.href.replace(/^#/, "")),
    []
  );
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/80 pt-[env(safe-area-inset-top,0px)] backdrop-blur-md">
      {/* `relative` is the anchor for the mobile dropdown panel. */}
      <div className="wrap relative flex min-h-[68px] items-center justify-between gap-3 py-2.5 sm:gap-4">
        <a
          href="#top"
          aria-label={`${site.name}, home`}
          className="flex items-center gap-2.5 whitespace-nowrap"
        >
          <Image
            src="/logo.webp"
            alt={`${site.name} logo`}
            width={250}
            height={125}
            className="h-12 w-auto sm:h-16 logo-light"
          />

          <Image
            src="/logo-black.webp"
            alt={`${site.name} logo`}
            width={250}
            height={125}
            className="h-12 w-auto sm:h-16 logo-dark"
          />

          {/* <span className="font-display text-[0.98rem] font-bold tracking-tight max-sm:hidden">
            {site.name}
          </span> */}
        </a>
        {/* Desktop nav. Below `md` the MobileNav dropdown takes over. */}
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const isActive = activeId === item.href.replace(/^#/, "");
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`spot whitespace-nowrap rounded-lg px-3 py-2 text-[0.92rem] font-semibold transition ${
                  isActive
                    ? "bg-panel2 text-accent shadow-sm"
                    : "text-muted hover:bg-panel2 hover:text-fg"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <div className="flex flex-none items-center gap-2">
          <a
            href="#contact"
            className="btn btn-primary hidden px-5 py-2.5 text-[0.92rem] sm:inline-flex"
          >
            Hire me
          </a>
          <ThemeToggle />
          <MobileNav activeId={activeId} />
        </div>
      </div>
    </header>
  );
}

