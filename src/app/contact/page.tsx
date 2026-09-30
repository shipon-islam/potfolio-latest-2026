import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Full-Stack Web Developer",
  description:
    "Get in touch with Shipon Islam for professional full-stack web development, custom websites, web applications, AI automation, and reliable development solutions.",
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
      <CTA
        topText="Have a project?"
        title="Let's build something useful together."
        subtitle="Tell me what you are building and I’ll help turn your idea into
                            a modern, scalable web solution."
      />
    </main>
  );
}
