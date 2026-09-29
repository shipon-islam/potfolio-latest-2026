// Every section heading is revealed by the same observer (ScrollReveal), so the
// sections themselves do not need to wrap it.
//
// The defaults are the original left-aligned heading, so the sections that came
// first are untouched. `eyebrow`, `highlight`, `align`, `size` and `divider`
// are opt-ins for the centred variant the Stack section uses.
export default function SectionHead({
  id,
  title,
  lede,
  eyebrow,
  highlight,
  align = "left",
  size = "md",
  divider = false,
}: {
  id: string;
  title: string;
  lede?: string;
  /** Small uppercase line above the title. */
  eyebrow?: string;
  /** A word inside `title` that is drawn with the gradient text (globals.css). */
  highlight?: string;
  align?: "left" | "center";
  size?: "md" | "lg";
  /** Short gradient rule under the copy. */
  divider?: boolean;
}) {
  const centered = align === "center";
  // Guarded, so a word that is not really in the title can never print it twice.
  const parts =
    highlight && title.includes(highlight) ? title.split(highlight) : null;

  return (
    <div
      data-reveal
      className={`mb-[clamp(2rem,5vw,3.5rem)] ${centered ? "text-center" : ""}`}
    >
      {eyebrow && (
        <p className="mb-3 text-[0.74rem] font-bold uppercase tracking-[0.3em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`max-w-[600px] ${
          size === "lg"
            ? "text-[clamp(1.9rem,4.4vw,3rem)]"
            : "text-[clamp(1.5rem,3.2vw,2.2rem)]"
        } leading-tight`}
      >
        {parts ? (
          <>
            {parts[0]}
            {/* The gradient and its slow sweep live on the span, the same
                treatment the hero name gets. */}
            <span className="grad-text animate-pan">{highlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {lede && (
        <p
          className={`mt-3.5 max-w-[56ch] text-muted ${
            centered ? "mx-auto" : ""
          }`}
        >
          {lede}
        </p>
      )}
      {divider && (
        <span
          aria-hidden="true"
          className={`mt-6 block h-[3px] w-16 rounded-full bg-gradient-to-r from-accent to-halo ${
            centered ? "mx-auto" : ""
          }`}
        />
      )}
    </div>
  );
}
