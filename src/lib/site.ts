// Every piece of content on the site lives in this file.
// Edit here instead of hunting through the components.
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
    instagram: "https://www.instagram.com/shipon_islam1", // TODO: replace with your Instagram profile URL
    facebook: "https://www.facebook.com/shipon.islam.920242", // TODO: replace with your Facebook profile URL
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
  {
    title: "Web Development",
    mobileTitle: "Web Dev",
    value: "4+ years",
    label: "building websites and web apps end to end",
  },
  {
    title: "Full-Stack Development",
    mobileTitle: "Full-Stack",
    value: "1.5+ years",
    label: "as a full-stack developer at awtomatig",
  },
  {
    title: "Fiverr Selling",
    mobileTitle: "Fiverr",
    value: "Level 1",
    label: "seller on Fiverr with repeat clients",
  },
  {
    title: "DevOps & Hosting",
    mobileTitle: "DevOps",
    value: "Docker + n8n",
    label: "shipping containers and automated workflows",
  },
  {
    title: "Server Management",
    mobileTitle: "Servers",
    value: "Ubuntu VPS",
    label: "servers set up, secured, backed up and monitored",
  },
  {
    title: "Production Deployment",
    mobileTitle: "Deployment",
    value: "Ready",
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
export const heroSocials: Social[] = [
  { label: "GitHub", href: site.links.github, icon: "github" },
  { label: "LinkedIn", href: site.links.linkedin, icon: "linkedin" },
  { label: "Fiverr", href: site.links.fiverr, icon: "fiverr" },
];

// Grouped the way the Stack section renders: one card per layer.
//
// `icon` (and `note.icon`) are SVG paths on the same 24x24 stroked grid as
// components/Icon.tsx, `blurb` is the one-line description under the card
// title, `span` places the card in the six-column grid (see Stack.tsx) and
// `note` is the optional closing strip the last two cards carry. `span` is a
// full Tailwind class string so the compiler can see it (do not build it
// dynamically).
//
// `tone` is the card's own hue, so each layer reads as a group instead of the
// accent colour five times over.
export type StackLayer = {
  layer: string;
  blurb: string;
  icon: string;
  /** Grid span, e.g. "lg:col-span-3" (half row) or "lg:col-span-2" (third). */
  span: string;
  /**
   * Two "R G B" channel triplets: the shade the light theme uses, then the one
   * for the dark theme. Stack.tsx passes them to the `.tone` block in
   * globals.css, the same way TechIcon.tsx passes a brand colour, so a card can
   * have a hue of its own without re-declaring any theme token.
   */
  tone: { light: string; dark: string };
  items: string[];
  note?: { text: string; icon: string; italic?: boolean };
};

export const stack: StackLayer[] = [
  {
    layer: "Front end",
    blurb:
      "Modern UI frameworks and styling tools for fast, responsive and beautiful web apps.",
    icon: "M9 8.5l-3.5 3.5 3.5 3.5M15 8.5l3.5 3.5-3.5 3.5M13.2 6.5l-2.4 11",
    span: "lg:col-span-3",
    tone: { light: "67 56 202", dark: "99 102 241" }, // indigo
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
    blurb:
      "Robust server-side technologies and databases for scalable applications.",
    icon: "M4.8 3.5h14.4a1.3 1.3 0 0 1 1.3 1.3v4.4a1.3 1.3 0 0 1-1.3 1.3H4.8a1.3 1.3 0 0 1-1.3-1.3V4.8a1.3 1.3 0 0 1 1.3-1.3zM4.8 13.5h14.4a1.3 1.3 0 0 1 1.3 1.3v4.4a1.3 1.3 0 0 1-1.3 1.3H4.8a1.3 1.3 0 0 1-1.3-1.3v-4.4a1.3 1.3 0 0 1 1.3-1.3zM7.4 7h.01M7.4 17h.01",
    span: "lg:col-span-3",
    tone: { light: "5 150 105", dark: "16 185 129" }, // emerald
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
    blurb: "Deploy, manage and keep your apps running smoothly.",
    icon: "M6.5 19h11a4.5 4.5 0 0 0 .7-8.95 6.5 6.5 0 0 0-12.5 1.2A4 4 0 0 0 6.5 19z",
    span: "lg:col-span-6",
    tone: { light: "124 58 237", dark: "139 92 246" }, // violet
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
    blurb: "Save time with smart automations and integrations.",
    icon: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1zM12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z",
    span: "lg:col-span-3",
    tone: { light: "180 83 9", dark: "245 158 11" }, // amber
    items: ["n8n", "AI agents", "Webhooks", "Third-party API integrations"],
    note: {
      text: "Automation turns ideas into repeatable systems.",
      icon: "M13.5 2.5L5 13.5h5.4L10.5 21.5 19 10.5h-5.4z",
      italic: true,
    },
  },
  {
    layer: "Design & tools",
    blurb: "Design, build and improve with modern tools and resources.",
    icon: "M17.6 2.6a2.7 2.7 0 0 1 3.8 3.8l-8.1 8.1-3.8-3.8zM9.5 10.7 6.4 15.5a2.6 2.6 0 0 0 3.6 3.7l3.3-4.7z",
    // The last card takes the full width of the two-column grid, so the row
    // above it never ends on a half-empty line.
    span: "md:col-span-2 lg:col-span-3",
    tone: { light: "37 99 235", dark: "59 130 246" }, // blue
    items: [
      "Figma to code",
      "Responsive UI",
      "Accessibility basics",
      "SEO fundamentals",
    ],
    note: {
      text: "Better tools. Better workflow. Better results.",
      icon: "M4.5 16.5c-1.5 1.5-2 3.5-2 3.5s2-.5 3.5-2m1.5-3.5 3 3m-5-6 3 3M14 3c3.5.5 6.5 3.5 7 7-1.5 4.5-5 8-9.5 9.5L4.5 12C6 7.5 9.5 4.5 14 3Zm-1 5.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z",
    },
  },
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
      "Set up and maintain Ubuntu VPS servers with SSH, users, firewall rules, security updates, Nginx, and SSL/HTTPS using Let's Encrypt.",
      "Deploy and manage Node.js and Python applications with Docker, Docker Compose, GitHub Actions, CI/CD pipelines, and rollback workflows.",
      "Manage databases, automated backups, log rotation, cron jobs, domains, DNS, Cloudflare, email records, shared hosting, and VPS migrations.",
      "Monitor server performance and troubleshoot production issues including high load, disk space, failed deployments, SSL problems, and service downtime.",
    ],
    stack: [
      "Ubuntu VPS",
      "SSH",
      "Nginx",
      "Docker",
      "GitHub Actions",
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
      "Develop e-commerce, business, community, and personal websites for international clients.",
      "Handle the complete project lifecycle, from requirements and design handoff to development, deployment, and post-launch support.",
      "Communicate directly with clients, provide live previews, and implement revisions based on project requirements.",
      "Build long-term client relationships through reliable delivery, responsive communication, and quality development.",
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
  country: string;
  rating: number;
  avatar?: string;
  source?: { label: string; href: string };
};

// Six entries so the slider (3 cards on desktop, 1 on mobile) always has
// somewhere to go.
export const fiverrReviewUrl =
  "https://www.fiverr.com/shipon_islam1/build-react-js-website-with-tailwind-css-from-figma-design?context_referrer=tailored_homepage_perseus&source=recently_viewed_gigs&ref_ctx_id=c44366e2f4bc42c086df491b49a88511&context=recommendation&pckg_id=1&pos=4&context_alg=recently_viewed&imp_id=effb3a4a-d527-4841-8107-d64d60bc313a";
const fiverrReviewUrl2 =
  "https://www.fiverr.com/shipon_islam1/make-svg-animation-using-css-with-javascript-ad65?context_referrer=gig_page&source=other_gigs_by&ref_ctx_id=14d768188826441a9c7faa23f21ae0b4&pckg_id=1&pos=1&seller_online=true&imp_id=008f419a-b5af-4ab3-b29b-e9ebbcc6dc26";
export const reviews: Review[] = [
  {
    quote:
      "Fantastic working with Shipon. Great work and very quick and open to suggestions and comments. The website looks great and he was able to provide everything I asked for.",
    name: "Luismillersmkt",
    role: "Client",
    country: "USA",
    rating: 5,
    // avatar: "/reviews/john-doe.jpg",
    source: {
      label: "View on Fiverr",
      href: fiverrReviewUrl,
    },
  },
  {
    quote:
      "We recently hired Shipon for the front-end of our project using React and Tailwind CSS, and he exceeded our expectations. His prompt and clear communication, coupled with a friendly and professional attitude, made the process smooth and enjoyable.",
    name: "Scatchy",
    role: "Client",
    country: "Belgium",
    rating: 5,
    // avatar: "/reviews/ben-don.jpg",
    source: { label: "View on Fiverr", href: fiverrReviewUrl },
  },
  {
    quote:
      "Shipon Islam is one of the best sellers that I've ever worked with; he is very professional. He really wants to make the customer happy. He always prefers to make sure that you'll be happy with the work. I would definitely recommend him.",
    name: "Borhanusa",
    role: "Client",
    country: "USA",
    rating: 5,
    // avatar: "/reviews/john-head.jpg",
    source: { label: "View on Fiverr", href: fiverrReviewUrl },
  },
  {
    quote:
      "Very wonderful and excellent work, and I advise everyone with it, the work is fast and very pious",
    name: "Don9988",
    role: "Client",
    country: "Oman",
    rating: 5,
    // avatar: "/reviews/sarah-ahmed.jpg",
    source: { label: "View on Fiverr", href: fiverrReviewUrl },
  },
  {
    quote:
      "The n8n workflows he built quietly handle our order updates, invoices and follow-up emails. That is several hours of manual work gone every single week, and nothing has broken since.",
    name: "Ashish Patel",
    role: "Client",
    country: "India",
    rating: 5,
    // avatar: "/reviews/daniel-ray.jpg",
    source: { label: "View on Fiverr", href: fiverrReviewUrl },
  },
  {
    quote:
      "He is AMAZING. His work is great. high quality and delivered ahead of time. thank you so much!",
    name: "Bizzle1",
    role: "Client",
    country: "USA",
    rating: 5,
    // avatar: "/reviews/priya-nair.jpg",
    source: { label: "View on Fiverr", href: fiverrReviewUrl },
  },
  {
    quote:
      "It was a great experience, I would highly recommend his services. Great attention to detail, good knowledge, and fast execution.",
    name: "Nahid bin rafique",
    role: "Client",
    country: "Bangladesh",
    rating: 5,
    // avatar: "/reviews/priya-nair.jpg",
    source: { label: "View on Fiverr", href: fiverrReviewUrl },
  },
  {
    quote: "Exactly as we wanted! Communication was good. Thanks!",
    name: "Studiodot_nl",
    role: "Client",
    country: "Netherlands",
    rating: 5,
    // avatar: "/reviews/priya-nair.jpg",
    source: { label: "View on Fiverr", href: fiverrReviewUrl2 },
  },
];
