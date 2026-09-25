"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      // If near the top, unselect active section (in hero / above first section)
      if (window.scrollY < 120) {
        setActiveId("");
        return;
      }

      // Check if user is near the bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;

      if (isAtBottom && sectionIds.length > 0) {
        setActiveId(sectionIds[sectionIds.length - 1]);
        return;
      }

      // We look for the section whose top edge has passed header line (around 120-160px from top)
      // and hasn't completely scrolled away.
      const offset = 160;
      let currentSection = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        // If the top of the section is at or above the threshold
        // and the bottom of the section is still below that threshold
        if (rect.top <= offset && rect.bottom > offset) {
          currentSection = id;
          break;
        }
      }

      // Fallback: If in a gap or scrolled past sections, pick the latest section passed
      if (!currentSection) {
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const id = sectionIds[i];
          const el = document.getElementById(id);
          if (!el) continue;
          if (el.getBoundingClientRect().top <= offset) {
            currentSection = id;
            break;
          }
        }
      }

      setActiveId(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sectionIds]);

  return activeId;
}

