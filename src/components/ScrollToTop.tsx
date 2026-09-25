"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

// Global "back to top" button, mounted once in app/layout.tsx. It is an anchor
// to `#top`, so the scroll itself needs no JS: globals.css sets
// `scroll-behavior: smooth` and flips it back to `auto` for
// `prefers-reduced-motion: reduce`. Only the show/hide state is client-side.
const SHOW_AFTER = 480;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > SHOW_AFTER;
      // Only re-render when the state actually flips, not on every scroll frame.
      setVisible((current) => (current === next ? current : next));
    };

    onScroll(); // cover a reload that restores an already-scrolled position.
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-[calc(env(safe-area-inset-bottom,0px)+1.25rem)] right-5 z-30 grid h-11 w-11 place-items-center rounded-full border border-line bg-panel text-fg shadow-[0_10px_28px_rgb(0_0_0/0.22)] transition duration-200 hover:-translate-y-px hover:border-accent hover:text-accent ${
        visible ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <Icon d="M12 19V5M5 12l7-7 7 7" className="h-5 w-5" />
    </a>
  );
}
