import About from "@/components/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Shipon Islam | Full-Stack Web Developer",
  description:
    "Learn more about Shipon Islam, a full-stack web developer specializing in Next.js, React, Node.js, TypeScript, and modern web application development.",
};

export default function AboutPage() {
  return (
    <main>
      <About />
    </main>
  );
}
