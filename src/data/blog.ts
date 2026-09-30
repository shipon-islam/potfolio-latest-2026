export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  content: {
    heading?: string;
    paragraphs?: string[];
    list?: string[];
    code?: string;
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-modern-websites-with-nextjs",
    title: "Building Modern Websites with Next.js",
    excerpt:
      "Learn how Next.js can help you build fast, scalable, SEO-friendly, and modern web applications.",
    category: "Next.js",
    date: "September 28, 2026",
    readTime: "6 min read",
    image: "/blogs/nextjs.webp",
    tags: ["Next.js", "React", "TypeScript", "Web Development"],
    content: [
      {
        heading: "Why Next.js?",
        paragraphs: [
          "Next.js has become one of the most popular frameworks for building modern React applications.",
          "It provides powerful features such as server-side rendering, static generation, routing, API routes, image optimization, and excellent developer experience.",
        ],
      },
      {
        heading: "Performance and SEO",
        paragraphs: [
          "Performance is an important part of modern web development. Next.js provides several features that help developers create fast websites.",
          "Server rendering and static generation can also help search engines understand and index your website more effectively.",
        ],
      },
      {
        heading: "Reusable Components",
        paragraphs: [
          "One of the biggest advantages of using React and Next.js is the ability to create reusable components.",
          "Reusable components make applications easier to maintain and help keep the design consistent across different pages.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Next.js is a powerful choice for developers who want to build modern, scalable, and high-performance web applications.",
        ],
      },
    ],
  },

  {
    slug: "react-component-design-best-practices",
    title: "React Component Design Best Practices",
    excerpt:
      "A practical guide to creating reusable, maintainable, and scalable React components.",
    category: "React",
    date: "September 20, 2026",
    readTime: "5 min read",
    image: "/blogs/react.webp",
    tags: ["React", "JavaScript", "Components", "Frontend"],
    content: [
      {
        heading: "Keep Components Focused",
        paragraphs: [
          "A React component should ideally have a clear responsibility.",
          "Large components can become difficult to understand and maintain, so breaking them into smaller components can improve the overall structure.",
        ],
      },
      {
        heading: "Reuse Common UI",
        paragraphs: [
          "Buttons, cards, inputs, modals, navigation elements, and other common UI elements can often be extracted into reusable components.",
        ],
      },
      {
        heading: "Use Meaningful Names",
        paragraphs: [
          "Good component names make a project easier to understand.",
          "Names should describe what the component does rather than how it is implemented.",
        ],
      },
    ],
  },

  {
    slug: "building-rest-apis-with-nodejs",
    title: "Building REST APIs with Node.js",
    excerpt:
      "Understand the fundamentals of creating scalable REST APIs using Node.js and Express.",
    category: "Node.js",
    date: "September 12, 2026",
    readTime: "7 min read",
    image: "/blogs/rest-api.webp",
    tags: ["Node.js", "Express", "REST API", "Backend"],
    content: [
      {
        heading: "What Is a REST API?",
        paragraphs: [
          "A REST API allows different applications and services to communicate with each other over HTTP.",
          "REST APIs commonly use methods such as GET, POST, PUT, PATCH, and DELETE.",
        ],
      },
      {
        heading: "Creating an Express Server",
        paragraphs: [
          "Express is a lightweight and flexible framework for building Node.js backend applications.",
        ],
        code: `import express from "express";

const app = express();

app.use(express.json());

app.get("/api/users", (req, res) => {
  res.json([]);
});

app.listen(5000);`,
      },
      {
        heading: "API Structure",
        paragraphs: [
          "For larger applications, separating routes, controllers, services, and database logic can make the backend easier to maintain.",
        ],
      },
    ],
  },

  {
    slug: "mongodb-and-prisma-with-nextjs",
    title: "Using MongoDB and Prisma with Next.js",
    excerpt:
      "Learn how MongoDB and Prisma can be combined with Next.js for modern full-stack applications.",
    category: "Full Stack",
    date: "September 5, 2026",
    readTime: "8 min read",
    image: "/blogs/mongodb.webp",
    tags: ["MongoDB", "Prisma", "Next.js", "Database"],
    content: [
      {
        heading: "Why MongoDB?",
        paragraphs: [
          "MongoDB is a document-oriented database that works well with applications where data structures can evolve over time.",
        ],
      },
      {
        heading: "What Prisma Provides",
        paragraphs: [
          "Prisma provides a modern database toolkit with type-safe database access and a developer-friendly API.",
        ],
      },
      {
        heading: "Using Them Together",
        paragraphs: [
          "Combining Next.js, Prisma, and MongoDB can provide a clean foundation for building full-stack applications.",
        ],
      },
    ],
  },

  {
    slug: "docker-for-web-developers",
    title: "Docker for Web Developers",
    excerpt:
      "A beginner-friendly introduction to using Docker for development and deployment.",
    category: "DevOps",
    date: "August 28, 2026",
    readTime: "6 min read",
    image: "/blogs/docker.webp",
    tags: ["Docker", "DevOps", "Deployment", "VPS"],
    content: [
      {
        heading: "What Is Docker?",
        paragraphs: [
          "Docker allows developers to package applications together with their dependencies into containers.",
        ],
      },
      {
        heading: "Why Use Docker?",
        paragraphs: [
          "Docker can make development and deployment environments more consistent.",
          "It is especially useful when applications require multiple services or specific runtime versions.",
        ],
      },
      {
        heading: "Docker in Production",
        paragraphs: [
          "Docker can also be used on VPS servers and cloud infrastructure to simplify application deployment.",
        ],
      },
    ],
  },

  {
    slug: "automating-workflows-with-ai-and-n8n",
    title: "Automating Workflows with AI and n8n",
    excerpt:
      "Discover how AI agents and workflow automation can reduce repetitive tasks and improve productivity.",
    category: "AI & Automation",
    date: "August 18, 2026",
    readTime: "7 min read",
    image: "/blogs/automatic-workflow.webp",
    tags: ["AI", "n8n", "Automation", "AI Agents"],
    content: [
      {
        heading: "What Is Workflow Automation?",
        paragraphs: [
          "Workflow automation connects different applications and services so repetitive tasks can happen automatically.",
        ],
      },
      {
        heading: "Using n8n",
        paragraphs: [
          "n8n provides a visual workflow environment where developers can connect APIs, databases, webhooks, AI services, and other tools.",
        ],
      },
      {
        heading: "Adding AI",
        paragraphs: [
          "AI can make automated workflows more flexible by allowing systems to process text, classify information, generate content, and make context-aware decisions.",
        ],
      },
    ],
  },
];
