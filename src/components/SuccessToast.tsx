"use client";

import { useEffect, useRef, useState } from "react";

type SuccessToastProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  duration?: number;
};

export default function SuccessToast({
  open,
  onClose,
  title = "Message sent",
  message = "Thanks for reaching out. I'll reply within a day.",
  duration = 5000,
}: SuccessToastProps) {
  const [mounted, setMounted] = useState(false); // in the DOM
  const [shown, setShown] = useState(false); // animated in

  // Keep the latest onClose without restarting the timer on every parent render
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (open) {
      setMounted(true);
      // Two frames so the initial (hidden) styles paint before transitioning
      const raf = requestAnimationFrame(() =>
        requestAnimationFrame(() => setShown(true)),
      );
      const timer = setTimeout(() => onCloseRef.current(), duration);
      return () => {
        cancelAnimationFrame(raf);
        clearTimeout(timer);
      };
    }

    setShown(false);
    const unmount = setTimeout(() => setMounted(false), 300);
    return () => clearTimeout(unmount);
  }, [open, duration]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed left-4 right-4 top-4 z-50 sm:left-auto sm:right-6 sm:top-6 sm:w-96">
      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-auto relative overflow-hidden rounded-xl border border-muted bg-bg shadow-lg transition-all duration-300 ease-out motion-reduce:transition-none ${
          shown ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
        }`}
      >
        <div className="flex items-start gap-3 p-4">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-halo text-muted ">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </span>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-muted ">{title}</p>
            <p className="mt-0.5 text-sm text-black  dark:text-white">
              {message}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Dismiss notification"
            className="-mr-1 -mt-1 rounded-md p-1 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Time remaining */}
        <div
          className="h-1 bg-halo motion-reduce:hidden"
          style={{
            width: shown ? "0%" : "100%",
            transition: `width ${duration}ms linear`,
          }}
        />
      </div>
    </div>
  );
}
