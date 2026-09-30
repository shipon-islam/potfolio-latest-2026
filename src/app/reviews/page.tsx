import CTA from "@/components/CTA";
import Reviews from "@/components/Reviews";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews | Full-Stack Web Developer",
  description:
    "Read client reviews and testimonials about Shipon Islam’s web development services, communication, project quality, reliability, and professional support.",
};

export default function ReviewsPage() {
  return (
    <main>
      <Reviews />
      <CTA
        topText="Have a project?"
        title="Let's build something useful together."
        subtitle="Tell me what you are building and I’ll help turn your idea into
                      a modern, scalable web solution."
      />
    </main>
  );
}
