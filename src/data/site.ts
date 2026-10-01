export const heroHighlights = [
  { label: "Web Apps", icon: "M3 5h18v14H3zM3 9h18M6.5 7h.01M9 7h.01" },
  {
    label: "AI Applications",
    icon: "M12 3l1.9 4.8L18.7 9.7l-4.8 1.9L12 16.4l-1.9-4.8L5.3 9.7l4.8-1.9L12 3zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15zM5 14l.7 1.8L7.5 16.5l-1.8.7L5 19l-.7-1.8L2.5 16.5l1.8-.7L5 14z",
  },
  { label: "APIs", icon: "M9 6l-5 6 5 6M15 6l5 6-5 6M13.5 4l-3 16" },
  { label: "Automation", icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
];

export const site = {
  name: "Shipon Islam",
  role: "Full-Stack Web Developer",
  shortRole: "Full-Stack Developer",
  location: "Bangladesh",
  company: "awtomatig",
  experience: "4+ years",
  availability: "Taking on new projects",
  clipPathShape:
    "shape(from 87.45% 45.02%,curve to 92.48% 56.45% with 90.99% 50.00%,smooth to 92.05% 69.35%,smooth to 82.42% 77.15%,smooth to 71.01% 83.22%,smooth to 61.91% 91.53%,smooth to 49.74% 96.95%,smooth to 38.70% 91.46%,smooth to 25.99% 85.79%,smooth to 15.38% 80.54%,smooth to 14.30% 66.90%,smooth to 13.33% 55.08%,smooth to 11.20% 44.30%,smooth to 11.95% 32.32%,smooth to 16.84% 21.25%,smooth to 27.31% 15.38%,smooth to 38.83% 11.12%,smooth to 50.39% 5.23%,smooth to 62.85% 5.60%,smooth to 72.70% 14.03%,smooth to 79.11% 24.51%,smooth to 82.80% 34.84%,smooth to 87.45% 45.02%)",
  // Where the contact form sends messages (it opens the visitor's email app).
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "shiponislam459@gmail.com",
  // Shown in the footer as a tap-to-call link. TODO: replace the placeholder
  // with your real number (set NEXT_PUBLIC_CONTACT_PHONE, see .env.example).
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+880 1641758653",
  // Used for canonical URLs, Open Graph tags and the sitemap. Point this at
  // your real domain before deploying, otherwise links say localhost.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  resumeUrl: process.env.NEXT_PUBLIC_RESUME_URL ?? "",
  links: {
    fiverr: "https://www.fiverr.com/shipon_islam1", // TODO: replace with your Fiverr profile URL
    github: "https://github.com/shipon-islam", // TODO: replace with your GitHub profile URL
    linkedin: "https://www.linkedin.com/in/shiponislam1", // TODO: replace with your LinkedIn profile URL
    x: "https://x.com/shiponIslam22", // TODO: replace with your X (Twitter) profile URL
    instagram: "https://www.instagram.com/shiponislam.developer", // TODO: replace with your Instagram profile URL
    facebook: "https://www.facebook.com/shiponislam.dev", // TODO: replace with your Facebook profile URL
  },
};

export const nav = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

export type Social = {
  label: string;
  href: string;
  icon: "linkedin" | "x" | "github" | "instagram" | "facebook" | "fiverr";
};

export const socials: Social[] = [
  { label: "LinkedIn", href: site.links.linkedin, icon: "linkedin" },
  { label: "X", href: site.links.x, icon: "x" },
  { label: "GitHub", href: site.links.github, icon: "github" },
  { label: "Instagram", href: site.links.instagram, icon: "instagram" },
  { label: "Facebook", href: site.links.facebook, icon: "facebook" },
];
export const footerLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
];
export type ContactChannel = {
  label: string;
  href: string;
  icon: "mail" | "phone" | "resume" | Social["icon"];
};

export const contactChannels: ContactChannel[] = [
  { label: site.email, href: `mailto:${site.email}`, icon: "mail" },
  {
    label: site.phone,
    href: `tel:${site.phone.replace(/[^\d+]/g, "")}`,
    icon: "phone",
  },
  { label: "Code on GitHub", href: site.links.github, icon: "github" },
  { label: "Download résumé", href: site.resumeUrl, icon: "resume" },
];

// Shown as chips under the hero buttons so the core skills are visible instantly.
export const heroSkills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Python",
  "Tailwind CSS",
  "Docker",
  "Linux & Nginx",
  "n8n",
];
export const heroSocials: Social[] = [
  { label: "GitHub", href: site.links.github, icon: "github" },
  { label: "LinkedIn", href: site.links.linkedin, icon: "linkedin" },
  { label: "Fiverr", href: site.links.fiverr, icon: "fiverr" },
];

export const heroStats = [
  {
    value: site.experience,
    label: "Experience",
    icon: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  },
  {
    value: "25+ Projects",
    label: "Delivered",
    icon: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
  },

  {
    value: "Worldwide",
    label: "Remote",
    icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2c2.6 2.8 4 6.2 4 10s-1.4 7.2-4 10c-2.6-2.8-4-6.2-4-10s1.4-7.2 4-10z",
  },
];
