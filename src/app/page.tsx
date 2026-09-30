import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <main id="top" className="">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Services />
        <Projects />
        <Reviews />
        <Contact />
      </main>
    </>
  );
}
