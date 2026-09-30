import CTA from "@/components/CTA";
import Experience from "@/components/Experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Full-Stack Web Developer",
  description:
    "Discover Shipon Islam’s work experience, tech stack expertise, and proven track record building scalable web applications with Next.js, React, and Node.js.",
};

export default function ExperiencePage() {
  return (
    <main>
      <Experience />
      <CTA
        topText="Have a project?"
        title="Let's build something useful together."
        subtitle="Tell me what you are building and I’ll help turn your idea into
                      a modern, scalable web solution."
      />
    </main>
  );
}
