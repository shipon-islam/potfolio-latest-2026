"use client";

import { useEffect, useRef, useState } from "react";
import { nav } from "@/lib/site";

// Hamburger menu shown below the `md` breakpoint. The desktop nav lives in
// Header.tsx; this component takes over on small screens and renders a dropdown
// panel under the header bar. It closes on link tap, Escape, an outside tap and
// when the viewport grows back to desktop.
interface MobileNavProps {
  activeId?: string;
}

export default function MobileNav({ activeId }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      // Don't leave keyboard focus stranded when the panel unmounts.
      buttonRef.current?.focus();
    };
    const onPointerDown = (event: PointerEvent) => {
      const node = rootRef.current;
      if (node && !node.contains(event.target as Node)) setOpen(false);
    };
    const onResize = () => {
      // Same 768px value as Tailwind's `md` breakpoint.
      if (window.innerWidth >= 768) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div ref={rootRef} className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-controls="mobile-nav"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="spot grid h-[38px] w-[38px] flex-none place-items-center rounded-xl border border-line bg-panel text-fg transition hover:border-accent"
      >
        <span className="flex w-[18px] flex-col gap-[5px]" aria-hidden="true">
          <span
            className={`h-[2px] w-full rounded-full bg-current transition-transform duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`h-[2px] w-full rounded-full bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-[2px] w-full rounded-full bg-current transition-transform duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </span>
      </button>

      {open && (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full z-10 mt-2 origin-top animate-menu-in rounded-2xl border border-line bg-panel p-2.5 shadow-[0_20px_45px_rgb(0_0_0/0.22)]"
        >
          <nav aria-label="Mobile" className="grid">
            {nav.map((item) => {
              const isActive = activeId === item.href.replace(/^#/, "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  aria-current={isActive ? "true" : undefined}
                  className={`spot rounded-xl px-4 py-3 text-[1rem] font-semibold transition ${
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
          <a
            href="#contact"
            onClick={close}
            className="btn btn-primary mt-2.5 w-full text-[0.95rem] sm:hidden"
          >
            Hire me
          </a>
        </div>
      )}
    </div>
  );
}
