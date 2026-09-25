// Every piece of content on the site lives in this file.
// Edit here instead of hunting through the components.

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
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "you@example.com",
  // Shown in the footer as a tap-to-call link. TODO: replace the placeholder
  // with your real number (set NEXT_PUBLIC_CONTACT_PHONE, see .env.example).
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+880 1XXX-XXXXXX",
  // Used for canonical URLs, Open Graph tags and the sitemap. Point this at
  // your real domain before deploying, otherwise links say localhost.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  resumeUrl: process.env.NEXT_PUBLIC_RESUME_URL ?? "",
  links: {
    fiverr: "https://www.fiverr.com/", // TODO: replace with your Fiverr profile URL
    github: "https://github.com/", // TODO: replace with your GitHub profile URL
    linkedin: "https://www.linkedin.com/", // TODO: replace with your LinkedIn profile URL
    x: "https://x.com/", // TODO: replace with your X (Twitter) profile URL
    instagram: "https://www.instagram.com/", // TODO: replace with your Instagram profile URL
    facebook: "https://www.facebook.com/", // TODO: replace with your Facebook profile URL
  },
};

export const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

// The social row in the footer. `icon` picks a glyph from
// components/SocialIcon.tsx and the URLs come from `site.links` above, so
// there is only one place to edit a profile URL.
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
// The footer's "Get in touch" column, in the order it is shown. Add a channel by
// adding a line here — the footer just renders the list. A row whose `href` is
// empty is skipped (that is how the resume row stays hidden until
// NEXT_PUBLIC_RESUME_URL is set).
// `icon` is either a stroked glyph from components/Icon.tsx ("mail", "phone",
// "resume") or a brand mark from components/SocialIcon.tsx.
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

export const facts = [
  { value: "4+ years", label: "building websites and web apps end to end" },
  { value: "1.5+ years", label: "as a full-stack developer at awtomatig" },
  { value: "Level 1", label: "seller on Fiverr with repeat clients" },
  {
    value: "Docker + n8n",
    label: "shipping containers and automated workflows",
  },
  {
    value: "Ubuntu VPS",
    label: "servers set up, secured, backed up and monitored",
  },
  {
    value: "Production Ready",
    label: "tested, optimized and deployed for real-world use",
  },
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

// Grouped the way the Stack section renders: one row per layer.
export const stack = [
  {
    layer: "Front end",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Redux Toolkit",
      "HTML5 & CSS3",
    ],
  },
  {
    layer: "Back end",
    items: [
      "Node.js",
      "Express.js",
      "Python",
      "REST APIs",
      "JWT auth",
      "MongoDB",
      "Prisma",
      "Firebase",
    ],
  },
  {
    layer: "DevOps",
    items: [
      "Linux (Ubuntu VPS)",
      "Nginx",
      "Docker",
      "Docker Compose",
      "Git & GitHub",
      "GitHub Actions",
      "Cloudflare",
      "Let's Encrypt SSL",
      "PM2",
      "VPS & shared hosting",
      "Backups & monitoring",
      "Vercel",
      "Render",
    ],
  },
  {
    layer: "Automation",
    items: ["n8n", "AI agents", "Webhooks", "Third-party API integrations"],
  },
  {
    layer: "Design & tools",
    items: [
      "Figma to code",
      "Responsive UI",
      "Accessibility basics",
      "SEO fundamentals",
    ],
  },
];

// `icon` is an SVG path (24x24 grid, stroked). `span` is a full Tailwind class
// string so the compiler can see it (do not build it dynamically).
export type Service = {
  title: string;
  body: string;
  tags: string;
  span: string;
  icon: string;
};

export const services: Service[] = [
  {
    title: "Figma to React",
    body: "Send me your Figma file and get a pixel-accurate, responsive website back, built with React, TypeScript and Tailwind CSS.",
    tags: "React, TypeScript, Tailwind CSS",
    span: "md:col-span-3",
    icon: "M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM8 21h8M12 17v4",
  },
  {
    title: "Next.js websites and web apps",
    body: "Server-rendered pages that load fast and are easy for search engines to read. Good for stores, marketplaces and business sites.",
    tags: "Next.js, TypeScript, Tailwind CSS",
    span: "md:col-span-3",
    icon: "M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5",
  },
  {
    title: "APIs and databases",
    body: "Secure back ends with authentication, admin dashboards, uploads and clean data models, plus Firebase when you would rather not run a server.",
    tags: "Node.js, Express, MongoDB, Firebase",
    span: "md:col-span-2",
    icon: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6",
  },
  {
    title: "Python services and scripts",
    body: "Django back ends, scraping and data jobs, and small Python services that sit next to your JavaScript app.",
    tags: "Python, Django, scripting",
    span: "md:col-span-2",
    icon: "M12 2a4 4 0 0 0-4 4v3h8V6a4 4 0 0 0-4-4zM8 21a4 4 0 0 0 4 4M8 9v3a2 2 0 0 0 2 2h4a2 2 0 0 1 2 2v2a4 4 0 0 0 8 0V9H8z",
  },
  {
    title: "Docker, VPS and hosting",
    body: "Containerised builds with a repeatable setup, plus the server side of it: I set up the VPS or shared hosting, put Nginx in front, add free SSL, automate deploys and backups, then keep an eye on uptime.",
    tags: "Docker, Nginx, VPS, GitHub Actions",
    span: "md:col-span-2",
    icon: "M3 10h18v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-5zM7 10V6h4v4M13 10V6h4v4M12 10V3",
  },
];

export const automation = {
  title: "Workflow automation with AI agents",
  body: "Connect your forms, spreadsheets, email, CRM and messaging tools with n8n, then add AI agents where they genuinely save time, like answering leads, qualifying requests and moving data between systems.",
  tags: "n8n, AI agents",
  icon: "M8.5 6h7M8 7.5l3 9M16 7.5l-3 9M6 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM18 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM12 15.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z",
};

export type Experience = {
  period: string;
  role: string;
  org: string;
  place: string;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    period: "2025 — Present",
    role: "Full-Stack Web Developer",
    org: "awtomatig",
    place: "Software company, Bangladesh",
    points: [
      "Build and maintain full-stack web apps with Next.js, TypeScript, Node.js and MongoDB, from database schema to the last pixel of the UI.",
      "Containerise services with Docker and set up deployment so staging and production behave the same way.",
      "Automate repetitive business workflows with n8n and AI agents: lead capture, notifications and data sync between tools.",
      "Work in a team with designers and other developers, review each other's code and ship on a sprint schedule.",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "n8n", "Docker"],
  },
  {
    // TODO: set the period to the year you started running your own servers, and
    // rename `org` / `place` if this work happened inside awtomatig or a hosting
    // company instead. These bullets are the day-to-day of self-managed hosting.
    period: "2023 — Present",
    role: "DevOps & Server Maintenance",
    org: "Self-managed VPS, Cloudflare and shared hosting",
    place: "Freelance clients and own projects, remote",
    points: [
      "Set up Ubuntu VPS servers from a blank install: SSH keys, users and sudo, firewall rules, unattended security updates and a clean folder layout per app.",
      "Run Node.js and Python apps behind Nginx as a reverse proxy with SSL from Let's Encrypt, so every site is HTTPS-only and certificates renew themselves.",
      "Deploy with Docker and Docker Compose: builds from a registry, redeploys that don't take the site down, and rollbacks to the previous image when a release misbehaves.",
      "Automate the repetitive work: database dumps and off-site backups, log rotation, cron jobs, plus GitHub Actions that build and ship on every push.",
      "Look after domains, DNS and email records, and put Cloudflare in front of the servers for caching, HTTPS and basic attack protection.",
      "Move client sites between hosts (shared hosting, cPanel panels and VPS boxes) without downtime, and keep everything on the latest patched stack.",
      "Monitor uptime, disk and memory, then debug production issues (high load, full disks, broken deploys, expired certificates) before a client notices them.",
    ],
    stack: [
      "Ubuntu VPS",
      "SSH",
      "Nginx",
      "Docker",
      "GitHub Actions",
      ,
      "PM2",
      "Backups",
    ],
  },
  {
    period: "2022 — Present",
    role: "Freelance Full-Stack Developer",
    org: "Fiverr — Level 1 Seller",
    place: "Remote, worldwide",
    points: [
      "Deliver e-commerce, business, community and personal websites for international clients as a Level 1 seller.",
      "Handle the whole job on my own: requirements, design handoff, development, deployment and after-launch support.",
      "Grew repeat business through clear communication, live previews before delivery and revisions until clients are happy.",
    ],
    stack: ["React.js", "Next.js", "Tailwind CSS", "Express.js", "Python"],
  },
];

export type Project = {
  name: string;
  type: "E-commerce" | "Marketplace" | "Business" | "Community" | "Personal";
  meta: string;
  body: string;
  tags: string[];
  // Optional. Add a live URL and the Work section renders a "Visit site" link.
  link?: string;
};

export const projects: Project[] = [
  {
    name: "Online Shopping",
    type: "E-commerce",
    meta: "Storefront with search, cart and accounts",
    body: "A responsive store front with search, cart, account pages and a best-sellers section, designed to work equally well on a phone and a desktop. Built with React and Tailwind CSS on top of a small Node API.",
    tags: ["React.js", "Tailwind CSS", "Node.js"],
  },
  {
    name: "BazarHost",
    type: "Marketplace",
    meta: "Multi-vendor marketplace on Next.js",
    body: "An online marketplace focused on fast product pages and a clean checkout path, with vendor listings, categories and search that stay quick as the catalogue grows. Server rendering keeps the pages indexable by Google.",
    tags: ["Next.js", "TypeScript", "MongoDB"],
  },
  {
    name: "Common Goods",
    type: "Marketplace",
    meta: "Second marketplace build, shared component library",
    body: "A second marketplace build where I reused a shared component library between projects, which cut the build time roughly in half and keeps the two sites consistent.",
    tags: ["Next.js", "Tailwind CSS", "Express.js"],
  },
  {
    name: "Burger Lover",
    type: "Business",
    meta: "Restaurant website with menu and delivery call to action",
    body: "A bold restaurant site with a menu, story page and an express delivery call to action that stays visible on mobile, where most of the visitors arrive.",
    tags: ["React.js", "Tailwind CSS"],
  },
  {
    name: "Rental APT",
    type: "Business",
    meta: "Property and rental listings with an application form",
    body: "A property and rental site with a gallery, contact page and an application form for affordable housing. The form validates on the client and posts to a small Express endpoint.",
    tags: ["Next.js", "Express.js", "MongoDB"],
  },
  {
    name: "DHCC Community",
    type: "Community",
    meta: "Non-profit website with prayer times and donations",
    body: "A website for a community organization with prayer times, news, announcements and a donate button that leads visitors to give, all editable by non-technical volunteers.",
    tags: ["React.js", "Tailwind CSS", "Firebase"],
  },
  {
    name: "Baitul Mukarram Masjid",
    type: "Community",
    meta: "Live prayer-time board for display in the hall",
    body: "A live prayer-time board showing the current time, Shuruq and each prayer with its iqamah time, made to be read from across a room and updated automatically.",
    tags: ["JavaScript", "APIs"],
  },
  {
    name: "Personal Portfolio",
    type: "Personal",
    meta: "This site: Next.js, Tailwind CSS, Docker",
    body: "The site you are reading: a statically rendered Next.js app with a dark and light theme, hand-built SVG animation, full SEO tags and JSON-LD, and a multi-stage Docker build for deployment.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Docker"],
  },
];

// NOTE: the quotes below are carried over from an earlier draft and the names
// look like placeholders. Review the Fiverr order history and replace them with
// real reviews (and real buyer display names) before publishing.
//
// `avatar` and `source` are optional:
//   - no avatar   -> the card shows the client's initials instead of a photo
//                    (drop a square image in public/reviews and point at it)
//   - no source   -> the card shows no link
export type Review = {
  quote: string;
  name: string;
  role: string;
  rating: number;
  avatar?: string;
  source?: { label: string; href: string };
};

// Six entries so the slider (3 cards on desktop, 1 on mobile) always has
// somewhere to go.
export const reviews: Review[] = [
  {
    quote:
      "It has been a pleasure working with Shipon. I appreciate your dedication to the projects that you and your team are on. It is nice from the customers' standpoint to be able to get in touch with you.",
    name: "John Doe",
    role: "Client",
    rating: 5,
    // avatar: "/reviews/john-doe.jpg",
    source: { label: "View on Fiverr", href: site.links.fiverr },
  },
  {
    quote:
      "Thank you so much for the work! I think our website is performing extremely well and our calls and emails are flooding in. I have referred a few others to you that needed UI design.",
    name: "Ben Don",
    role: "Client",
    rating: 5,
    // avatar: "/reviews/ben-don.jpg",
    source: { label: "View on Fiverr", href: site.links.fiverr },
  },
  {
    quote:
      "Shipon has done a great job designing our new site at Aeon Systems Inc. After about 6 months we are starting to see some results on Google.",
    name: "John Head",
    role: "Aeon Systems Inc.",
    rating: 5,
    // avatar: "/reviews/john-head.jpg",
    source: { label: "View on Fiverr", href: site.links.fiverr },
  },
  {
    quote:
      "Shipon rebuilt our store on Next.js and the whole site feels instant now. He asked the right questions before writing a line of code and showed us a live preview the whole way through.",
    name: "Sarah Ahmed",
    role: "Founder, Brightcart",
    rating: 5,
    // avatar: "/reviews/sarah-ahmed.jpg",
    source: { label: "View on Fiverr", href: site.links.fiverr },
  },
  {
    quote:
      "The n8n workflows he built quietly handle our order updates, invoices and follow-up emails. That is several hours of manual work gone every single week, and nothing has broken since.",
    name: "Daniel Ray",
    role: "Operations Lead",
    rating: 5,
    // avatar: "/reviews/daniel-ray.jpg",
    source: { label: "View on Fiverr", href: site.links.fiverr },
  },
  {
    quote:
      "Clear communication, quick replies and no surprises at the end. The Python scripts and the dashboard behind them do exactly what we asked for, and he still answers questions months later.",
    name: "Priya Nair",
    role: "Product Manager",
    rating: 5,
    // avatar: "/reviews/priya-nair.jpg",
    source: { label: "View on Fiverr", href: site.links.fiverr },
  },
];
