import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { heroSkills, site } from "@/lib/site";

// Structured data so Google can show the right name, role and links.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.siteUrl}/#person`,
      name: site.name,
      jobTitle: site.role,
      description: `${site.role} with ${site.experience} of experience building websites and web apps.`,
      url: site.siteUrl,
      image: `${site.siteUrl}/portrait.PNG`,
      email: `mailto:${site.email}`,
      telephone: site.phone,
      knowsAbout: heroSkills,
      worksFor: { "@type": "Organization", name: site.company },
      address: { "@type": "PostalAddress", addressLocality: site.location },
      sameAs: [
        site.links.github,
        site.links.linkedin,
        site.links.x,
        site.links.instagram,
        site.links.facebook,
        site.links.fiverr,
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.siteUrl}/#page`,
      url: site.siteUrl,
      name: `${site.name} — ${site.role}`,
      about: { "@id": `${site.siteUrl}/#person` },
      inLanguage: "en",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Experience />
        <Stack />
        <Services />
        <Work />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
