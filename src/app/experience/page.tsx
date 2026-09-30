import Experience from "@/components/Experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Full-Stack Web Developer",
  description:
    "Discover Shipon Islam’s work experience, tech stack expertise, and proven track record building scalable web applications with Next.js, React, and Node.js.",
};

export default function ContactPage() {
  return (
    <main>
      <Experience />
    </main>
  );
}
