export type Service = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  idealFor: string[];
  span: string;
  icon: string;
};
export const services: Service[] = [
  {
    id: "01",
    slug: "figma-to-react",
    title: "Figma to React Development",
    shortTitle: "Figma to React",
    description:
      "Pixel-accurate, responsive websites built from your Figma designs using React, TypeScript, and Tailwind CSS.",
    longDescription:
      "Turn your Figma designs into production-ready React websites with clean, reusable components and responsive layouts. I focus on accurately translating designs into fast and maintainable interfaces that work across modern devices and browsers.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: [
      "Pixel-accurate Figma implementation",
      "Fully responsive layouts",
      "Reusable React components",
      "Clean and maintainable code",
      "Cross-browser compatibility",
      "SEO-friendly structure",
    ],
    idealFor: [
      "Landing pages",
      "Business websites",
      "Portfolio websites",
      "SaaS interfaces",
      "Marketing websites",
    ],
    span: "md:col-span-3",
    icon: "M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM8 21h8M12 17v4",
  },
  {
    id: "02",
    slug: "nextjs-development",
    title: "Next.js Websites & Web Apps",
    shortTitle: "Next.js Development",
    description:
      "Server-rendered pages that load fast and are easy for search engines to read. Good for stores, marketplaces and business sites.",
    longDescription:
      "I build modern Next.js websites and web applications designed for speed, scalability, and search visibility. From business websites to marketplaces and SaaS platforms, I can handle both the frontend experience and application logic.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Server-rendered pages",
      "SEO-friendly architecture",
      "Responsive UI",
      "Reusable components",
      "API integration",
      "Authentication",
      "Database integration",
      "Performance optimization",
    ],
    idealFor: [
      "Business websites",
      "E-commerce stores",
      "Marketplaces",
      "SaaS applications",
      "Dashboards",
    ],
    span: "md:col-span-3",
    icon: "M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5",
  },
  {
    id: "03",
    slug: "api-database-development",
    title: "APIs & Database Development",
    shortTitle: "APIs and databases",
    description:
      "Secure back ends with authentication, admin dashboards, uploads and clean data models, plus Firebase when you would rather not run a server.",
    longDescription:
      "Build a reliable backend for your web application with secure APIs, authentication, database architecture, file uploads, and third-party integrations. I work with Node.js, Express, MongoDB, Prisma, and Firebase.",
    technologies: ["Node.js", "Express", "MongoDB", "Firebase"],
    features: [
      "REST API development",
      "Authentication & authorization",
      "Database design",
      "Admin dashboards",
      "File uploads",
      "Third-party integrations",
      "JWT authentication",
      "Firebase integration",
    ],
    idealFor: [
      "Web applications",
      "E-commerce platforms",
      "Admin panels",
      "SaaS products",
      "Mobile app backends",
    ],
    span: "md:col-span-2",
    icon: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6",
  },
  {
    id: "04",
    slug: "python-development",
    title: "Python services and scripts",
    shortTitle: "Python Development",
    description:
      "Django back ends, scraping and data jobs, and small Python services that sit next to your JavaScript app.",
    longDescription:
      "I build practical Python services and automation scripts that solve specific business and technical problems. Python can work alongside your existing JavaScript application or operate as an independent service.",
    technologies: ["Python", "Django", "scripting", "REST APIs"],
    features: [
      "Python scripting",
      "Django development",
      "Web scraping",
      "Data processing",
      "API services",
      "Background jobs",
      "Automation scripts",
    ],
    idealFor: [
      "Data processing",
      "Web scraping",
      "Automation",
      "Backend services",
      "Scheduled jobs",
    ],

    span: "md:col-span-2",
    icon: "M12 2a4 4 0 0 0-4 4v3h8V6a4 4 0 0 0-4-4zM8 21a4 4 0 0 0 4 4M8 9v3a2 2 0 0 0 2 2h4a2 2 0 0 1 2 2v2a4 4 0 0 0 8 0V9H8z",
  },
  {
    id: "05",
    slug: "devops-hosting",
    title: "Docker, VPS and hosting",
    shortTitle: "DevOps & Hosting",
    description:
      "Containerised builds with a repeatable setup, plus the server side of it: I set up the VPS or shared hosting, put Nginx in front, add free SSL, automate deploys and backups, then keep an eye on uptime.",
    longDescription:
      "Take your application from development to production with a reliable deployment setup. I configure servers, Docker containers, Nginx, SSL, backups, monitoring, and automated deployment workflows.",
    technologies: ["Docker", "Nginx", "VPS", "GitHub Actions"],
    features: [
      "Ubuntu VPS setup",
      "Docker deployment",
      "Nginx configuration",
      "SSL/HTTPS setup",
      "GitHub Actions CI/CD",
      "Cloudflare configuration",
      "Automated backups",
      "Server monitoring",
    ],
    idealFor: [
      "Production applications",
      "Node.js applications",
      "Python applications",
      "Docker projects",
      "VPS migrations",
    ],
    span: "md:col-span-2",
    icon: "M3 10h18v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-5zM7 10V6h4v4M13 10V6h4v4M12 10V3",
  },
  {
    id: "06",
    slug: "ai-workflow-automation",
    title: "Workflow automation with AI agents",
    shortTitle: "AI Automation",
    description:
      "Connect your forms, spreadsheets, email, CRM and messaging tools with n8n, then add AI agents where they genuinely save time, like answering leads, qualifying requests and moving data between systems.",
    longDescription:
      "Build practical AI-powered workflows that connect your tools and reduce repetitive work. I use n8n, APIs, webhooks, and AI agents to automate lead handling, data processing, notifications, customer responses, and business processes.",
    technologies: ["n8n", "AI Agents", "OpenAI", "Webhooks"],
    features: [
      "n8n workflow automation",
      "AI agent integration",
      "API & webhook integration",
      "Lead automation",
      "Email automation",
      "Data synchronization",
      "CRM automation",
      "Messaging automation",
    ],
    idealFor: [
      "Business automation",
      "Lead management",
      "AI-powered workflows",
      "Data processing",
      "Repetitive business tasks",
    ],
    span: "md:col-span-2",
    icon: "M8.5 6h7M8 7.5l3 9M16 7.5l-3 9M6 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM18 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM12 15.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0-5 0z",
  },
];

export const automation = {
  id: "6",
  title: "Workflow automation with AI agents",
  body: "Connect your forms, spreadsheets, email, CRM and messaging tools with n8n, then add AI agents where they genuinely save time, like answering leads, qualifying requests and moving data between systems.",
  tags: "n8n, AI agents",
  icon: "M8.5 6h7M8 7.5l3 9M16 7.5l-3 9M6 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM18 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM12 15.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z",
};
