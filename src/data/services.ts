export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  idealFor: string[];
};

export const services: Service[] = [
  {
    slug: "figma-to-react",
    number: "01",
    title: "Figma to React Development",
    shortTitle: "Figma to React",
    description:
      "Pixel-accurate, responsive websites built from your Figma designs using React, TypeScript, and Tailwind CSS.",
    longDescription:
      "Turn your Figma designs into production-ready React websites with clean, reusable components and responsive layouts. I focus on accurately translating designs into fast and maintainable interfaces that work across modern devices and browsers.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
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
  },

  {
    slug: "nextjs-development",
    number: "02",
    title: "Next.js Websites & Web Apps",
    shortTitle: "Next.js Development",
    description:
      "Fast, SEO-friendly websites and web applications built with Next.js, TypeScript, and Tailwind CSS.",
    longDescription:
      "I build modern Next.js websites and web applications designed for speed, scalability, and search visibility. From business websites to marketplaces and SaaS platforms, I can handle both the frontend experience and application logic.",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Prisma",
    ],
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
  },

  {
    slug: "api-database-development",
    number: "03",
    title: "APIs & Database Development",
    shortTitle: "APIs & Databases",
    description:
      "Secure backend systems with APIs, authentication, databases, admin dashboards, and integrations.",
    longDescription:
      "Build a reliable backend for your web application with secure APIs, authentication, database architecture, file uploads, and third-party integrations. I work with Node.js, Express, MongoDB, Prisma, and Firebase.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Prisma",
      "Firebase",
      "REST APIs",
      "JWT",
    ],
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
  },

  {
    slug: "python-development",
    number: "04",
    title: "Python Services & Scripts",
    shortTitle: "Python Development",
    description:
      "Python-powered services, scripts, data jobs, scraping tools, and backend solutions.",
    longDescription:
      "I build practical Python services and automation scripts that solve specific business and technical problems. Python can work alongside your existing JavaScript application or operate as an independent service.",
    technologies: [
      "Python",
      "Django",
      "REST APIs",
      "Web Scraping",
      "Automation",
    ],
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
  },

  {
    slug: "devops-hosting",
    number: "05",
    title: "Docker, VPS & Hosting",
    shortTitle: "DevOps & Hosting",
    description:
      "Deploy and manage applications with Docker, Ubuntu VPS, Nginx, SSL, backups, and automated deployments.",
    longDescription:
      "Take your application from development to production with a reliable deployment setup. I configure servers, Docker containers, Nginx, SSL, backups, monitoring, and automated deployment workflows.",
    technologies: [
      "Docker",
      "Docker Compose",
      "Ubuntu VPS",
      "Nginx",
      "GitHub Actions",
      "Cloudflare",
      "PM2",
      "Let's Encrypt",
    ],
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
  },

  {
    slug: "ai-workflow-automation",
    number: "06",
    title: "Workflow Automation with AI Agents",
    shortTitle: "AI & Automation",
    description:
      "Connect your tools and automate repetitive business workflows using n8n, AI agents, webhooks, and APIs.",
    longDescription:
      "Automate repetitive work by connecting forms, spreadsheets, email, CRMs, messaging platforms, and APIs. I use n8n and AI agents to create workflows that can capture leads, process information, send notifications, synchronize data, and handle routine tasks.",
    technologies: [
      "n8n",
      "AI Agents",
      "Webhooks",
      "REST APIs",
      "Third-party APIs",
    ],
    features: [
      "n8n workflow development",
      "AI agent integration",
      "Lead automation",
      "Email automation",
      "Data synchronization",
      "Webhook integrations",
      "API integrations",
      "Business process automation",
    ],
    idealFor: [
      "Lead generation",
      "Customer support",
      "Order processing",
      "Email workflows",
      "Data synchronization",
      "Business automation",
    ],
  },
];
