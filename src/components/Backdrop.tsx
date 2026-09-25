// Page-wide decorative background, mounted once in app/layout.tsx.
//
// Three blurred colour fields drift behind every section, plus a faint blueprint
// grid fading out under the hero. It is `fixed`, so the page simply slides over
// it, and it is `aria-hidden` because none of it carries meaning.
//
// The colours come from the theme tokens (globals.css) so the whole backdrop
// follows the dark/light switch: `--halo`, `--btn` and `--accent` are redefined
// per theme. Motion is `animate-drift-*` from tailwind.config.ts, which
// globals.css switches off for `prefers-reduced-motion: reduce`.
export default function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="backdrop-grid absolute inset-x-0 top-0 h-[75vh]" />

      <div className="backdrop-blob animate-drift-a left-[-12%] top-[-14%] h-[clamp(280px,46vw,700px)] w-[clamp(280px,46vw,700px)] bg-halo" />
      <div className="backdrop-blob animate-drift-b right-[-14%] top-[18%] h-[clamp(240px,38vw,560px)] w-[clamp(240px,38vw,560px)] bg-btn" />
      <div className="backdrop-blob animate-drift-c bottom-[-16%] left-[26%] h-[clamp(240px,42vw,620px)] w-[clamp(240px,42vw,620px)] bg-accent" />
    </div>
  );
}