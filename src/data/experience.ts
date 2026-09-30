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
