import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Stack from "@/components/Stack";
import Work from "@/components/Work";

// Structured data so Google can show the right name, role and links.

export default function Home() {
  return (
    <>
      <main id="top" className="">
        <Hero />
        <About />
        <Experience />
        <Stack />
        <Services />
        <Work />
        <Reviews />
        <Contact />
      </main>
    </>
  );
}
