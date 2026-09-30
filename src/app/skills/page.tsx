import CTA from "@/components/CTA";
import Skills from "@/components/Skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Full-Stack Web Developer",
  description:
    "Explore Shipon Islam’s web development skills in React, Next.js, Node.js, TypeScript, MongoDB, Python, Docker, DevOps, and AI workflow automation.",
};

export default function SkillsPage() {
  return (
    <main>
      <Skills />
      <CTA
        topText="Have a project?"
        title="Let's build something useful together."
        subtitle="Tell me what you are building and I’ll help turn your idea into
                      a modern, scalable web solution."
      />
    </main>
  );
}
