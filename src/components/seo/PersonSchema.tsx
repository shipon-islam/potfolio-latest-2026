import { heroSkills, site } from "@/data/site";

export default function PersonSchema() {
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
