import type { Config } from "tailwindcss";

// Colors come from CSS variables (see app/globals.css) so dark/light themes
// switch without any `dark:` variants. Values are RGB channels so that
// opacity modifiers like `bg-bg/80` keep working.
const c = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: c("bg"),
        panel: c("panel"),
        panel2: c("panel-2"),
        line: c("line"),
        fg: c("fg"),
        muted: c("muted"),
        accent: c("accent"),
        btn: c("btn"),
        halo: c("halo"),
        stroke: c("stroke"),
      },
      fontFamily: {
        display: [
          "var(--font-display)",
          "Trebuchet MS",
          "Segoe UI",
          "sans-serif",
        ],
        body: ["var(--font-body)", "Segoe UI", "system-ui", "sans-serif"],
      },
      keyframes: {
        flow: { to: { strokeDashoffset: "-340" } },
        glide: {
          from: { strokeDashoffset: "1000" },
          to: { strokeDashoffset: "0" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(22,163,74,.55)" },
          "70%, 100%": { boxShadow: "0 0 0 10px transparent" },
        },
        // Mobile menu panel drop-in (globals.css disables it for reduced motion).
        "menu-in": {
          from: { opacity: "0", transform: "translateY(-6px) scale(0.98)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        // Soft background motion for the page-wide backdrop
        // (components/Backdrop.tsx) and the floating tech tiles in the hero.
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "33%": { transform: "translate3d(4%, -5%, 0) scale(1.08)" },
          "66%": { transform: "translate3d(-4%, 4%, 0) scale(0.94)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(4deg)" },
        },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        // Hero name: the gradient sweeps across the letters.
        pan: { to: { backgroundPosition: "200% 50%" } },
        // Light streak that crosses a card (used with `group-hover:`).
        sheen: {
          "0%": { transform: "translateX(-140%) skewX(-14deg)", opacity: "0" },
          "45%": { opacity: "0.7" },
          "100%": { transform: "translateX(240%) skewX(-14deg)", opacity: "0" },
        },
        // Hero scroll cue.
        cue: {
          "0%": { transform: "translateY(-5px)", opacity: "0" },
          "35%": { opacity: "1" },
          "100%": { transform: "translateY(11px)", opacity: "0" },
        },
        // Above-the-fold entrance. Unlike `data-reveal` (which waits for the
        // observer) this one runs straight after paint, so the hero is never
        // blank on a slow connection.
        rise: {
          from: { opacity: "0", transform: "translateY(22px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        "flow-a": "flow 26s linear infinite",
        "flow-b": "flow 34s linear infinite reverse",
        "flow-c": "flow 42s linear infinite",
        "flow-d": "flow 30s linear infinite reverse",
        glide: "glide 9s linear infinite",
        "glide-slow": "glide 12s linear -4.5s infinite",
        "bob-a": "bob 6s ease-in-out infinite",
        "bob-b": "bob 7s ease-in-out -3s infinite",
        "pulse-ring": "pulse-ring 2.2s infinite",
        "menu-in": "menu-in 0.18s ease-out",
        "drift-a": "drift 24s ease-in-out infinite",
        "drift-b": "drift 32s ease-in-out -9s infinite",
        "drift-c": "drift 40s ease-in-out -18s infinite",
        "float-a": "float 7s ease-in-out infinite",
        "float-b": "float 9s ease-in-out -2.5s infinite",
        "float-c": "float 11s ease-in-out -5s infinite",
        "spin-slow": "spin-slow 28s linear infinite",
        "spin-slower": "spin-slow 44s linear infinite reverse",
        pan: "pan 7s linear infinite alternate",
        sheen: "sheen 1.1s ease-out",
        cue: "cue 1.9s ease-in-out infinite",
        "rise-in": "rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
