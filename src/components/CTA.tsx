import Link from "next/link";

type CTAType = {
  topText: string;
  title: string;
  subtitle: string;
  buttonText?: string;
  outlineBtnText?: string;
  outLineBtnLink?: string;
};
export default function CTA({
  topText,
  title,
  subtitle,
  buttonText = "Start a Project",
  outlineBtnText,
  outLineBtnLink = "#",
}: CTAType) {
  return (
    <section className="section pt-0">
      <div className="wrap">
        <div
          data-reveal
          className="relative overflow-hidden rounded-[2rem] border border-line bg-panel p-10 text-center shadow-[0_30px_80px_-45px_rgb(11_23_48/0.45)] sm:p-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-halo/10" />

          <div className="relative">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-accent">
              {topText}
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl text-[1.6rem] sm:text-3xl md:text-4xl">
              {title}
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-muted">{subtitle}</p>
            {outlineBtnText ? (
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 ">
                <Link href="/contact" className="btn btn-primary">
                  {buttonText}
                  <span>→</span>
                </Link>

                <Link href={outLineBtnLink} className="btn">
                  {outlineBtnText}
                </Link>
              </div>
            ) : (
              <Link href="/contact" className="btn btn-primary mt-8  ">
                {buttonText}
                <span>→</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
