export type skillsLayer = {
  layer: string;
  blurb: string;
  icon: string;
  span: string;
  tone: { light: string; dark: string };
  items: string[];
  note?: { text: string; icon: string; italic?: boolean };
};

export const skills: skillsLayer[] = [
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
