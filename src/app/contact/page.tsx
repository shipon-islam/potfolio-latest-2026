import About from "@/components/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Full-Stack Web Developer",
  description:
    "Reach out to Shipon Islam for expert full-stack web development. Specializing in modern Next.js, React, and Node.js solutions. Let’s collaborate!",
};

export default function ContactPage() {
  return (
    <main>
      <About />
    </main>
  );
}
