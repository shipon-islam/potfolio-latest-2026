"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const observed = new WeakSet<HTMLElement>();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((node) => node.classList.add("is-in"));

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          const node = entry.target as HTMLElement;

          node.classList.add("is-in");
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    const observeNodes = (root: ParentNode = document) => {
      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((node) => {
        if (observed.has(node)) return;

        observed.add(node);
        observer.observe(node);
      });
    };

    // Initial page
    observeNodes();

    // Detect elements added during client-side navigation
    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;

          if (node.matches("[data-reveal]")) {
            if (!observed.has(node)) {
              observed.add(node);
              observer.observe(node);
            }
          }

          observeNodes(node);
        }
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
