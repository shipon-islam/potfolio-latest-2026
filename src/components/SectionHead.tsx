// Every section heading is revealed by the same observer (ScrollReveal), so the
// sections themselves do not need to wrap it.
export default function SectionHead({ id, title, lede }: { id: string; title: string; lede?: string }) {
  return (
    <div data-reveal className="mb-[clamp(2rem,5vw,3.5rem)]">
      <h2 id={id} className="text-[clamp(1.5rem,3.2vw,2.2rem)] leading-tight">{title}</h2>
      {lede && <p className="mt-3.5 max-w-[56ch] text-muted">{lede}</p>}
    </div>
  );
}
