"use client";

import { useEffect, useRef } from "react";

// Site-wide cursor spotlight, mounted once in app/layout.tsx. One delegated
// listener lights up two things, so no section needs a handler of its own:
//
//   1. `.spotlight-glow`, a fixed beam that follows the pointer across the page;
//   2. the panel under the pointer, because every hover surface carries the
//      `spot` class and its beam is drawn by `.spot::before` from two CSS
//      variables that this component keeps up to date.
//
// Positions are written straight to the DOM inside a requestAnimationFrame, so
// moving the mouse never re-renders React (the same "one listener, no state"
// approach as ScrollToTop).
//
// A spotlight is a pointer affordance, so it stays off for visitors on
// touch-only screens or with `prefers-reduced-motion: reduce` — globals.css
// hides both beams in those cases too.
const SPOT_TARGET = ".spot";

export default function Spotlight() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reduceMotion.matches) return;

    let pointerX = 0;
    let pointerY = 0;
    let frame = 0;
    // The panel under the pointer plus its box, measured once per entry so a
    // pointer move never forces a layout read.
    let lit: HTMLElement | null = null;
    let litBox: DOMRect | null = null;

    const clearBeam = () => {
      lit?.style.removeProperty("--spot-x");
      lit?.style.removeProperty("--spot-y");
    };

    const paint = () => {
      frame = 0;
      glow.style.setProperty("--spot-x", `${pointerX}px`);
      glow.style.setProperty("--spot-y", `${pointerY}px`);
      if (!lit) return;
      const box = litBox ?? (litBox = lit.getBoundingClientRect());
      lit.style.setProperty("--spot-x", `${pointerX - box.left}px`);
      lit.style.setProperty("--spot-y", `${pointerY - box.top}px`);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      // Only touch the attribute when it actually changes: this writes on every
      // move otherwise.
      if (glow.dataset.on !== "true") glow.dataset.on = "true";

      const node = event.target instanceof Element ? event.target : null;
      const next = (node?.closest(SPOT_TARGET) as HTMLElement | null) ?? null;
      if (next !== lit) {
        clearBeam();
        lit = next;
        litBox = null;
      }

      if (!frame) frame = window.requestAnimationFrame(paint);
    };

    // Scrolling moves the panels but not the pointer, so the cached box goes
    // stale: drop it and let the next move place the beam again (the fixed beam
    // is viewport-relative and needs no update).
    const onScroll = () => {
      litBox = null;
      clearBeam();
    };

    // Pointer left the window or the tab lost focus: fade the page beam out.
    const onLeaveWindow = () => {
      glow.dataset.on = "false";
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeaveWindow);
    window.addEventListener("blur", onLeaveWindow);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener(
        "pointerleave",
        onLeaveWindow,
      );
      window.removeEventListener("blur", onLeaveWindow);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearBeam();
    };
  }, []);

  return <div ref={glowRef} className="spotlight-glow" aria-hidden="true" />;
}
