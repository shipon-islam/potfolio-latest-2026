export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;

  technologies: string[];

  features: string[];

  challenges?: string[];

  image: string;

  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "darul-hikmah-islamic-center",
    number: "01",
    title: "Darul Hikmah Islamic Center",
    category: "Community & Religious",

    description:
      "A community-focused platform designed to connect Muslims with mosques and Islamic centers across the USA.",

    longDescription:
      "Darul Hikmah Islamic Center is a community-focused web platform designed to help Muslims discover mosques and Islamic centers across the USA. The platform provides useful community information through a clean and accessible interface.",

    technologies: ["Next.js", "React", "Tailwind CSS", "Firebase"],

    features: [
      "Responsive interface",
      "Mosque information",
      "Community-focused pages",
      "Modern navigation",
      "Mobile-friendly design",
    ],

    challenges: [
      "Creating a simple experience for different types of users",
      "Making information easy to discover",
      "Building a responsive interface for different devices",
    ],

    image: "/projects/dhic.webp",

    liveUrl: "https://usamosque.vercel.app/",
  },

  {
    slug: "gentlemend",
    number: "02",
    title: "Gentlemend",
    category: "Healthcare & Wellness",

    description: "A men's self-care treatment discovery and booking platform.",

    longDescription:
      "Gentlemend is a modern platform focused on helping men discover and book self-care treatments. The platform brings different treatment categories together and provides users with a streamlined experience for exploring services.",

    technologies: ["React.js", "Tailwind CSS", "Node.js", "REST API"],

    features: [
      "Treatment discovery",
      "Service categories",
      "Booking experience",
      "Responsive interface",
      "Modern UI components",
    ],

    challenges: [
      "Designing a smooth treatment discovery experience",
      "Organizing different treatment categories",
      "Creating a responsive booking-oriented interface",
    ],

    image: "/projects/gentlement.webp",

    liveUrl: "https://gentlemend-booking-platform.vercel.app/",
  },

  {
    slug: "hcl-software",
    number: "03",
    title: "HCL Software",
    category: "Software & Technology",

    description:
      "A modern software company website focused on presenting digital solutions and technology services.",

    longDescription:
      "HCL Software is a professional software-focused website designed to present technology solutions and services through a clean, modern interface.",

    technologies: ["React.js", "Tailwind CSS"],

    features: [
      "Modern company website",
      "Responsive layouts",
      "Service presentation",
      "Reusable components",
      "Professional UI",
    ],

    challenges: [
      "Presenting technical information clearly",
      "Creating a professional visual hierarchy",
      "Maintaining consistency across responsive layouts",
    ],

    image: "/projects/hcl-software.webp",

    liveUrl: "https://hcl-softwar.vercel.app/",
  },

  {
    slug: "extrema-deals",
    number: "04",
    title: "Extrema Deals",
    category: "E-commerce & Online Shopping",

    description:
      "An online shopping and deals platform for discovering products and attractive offers.",

    longDescription:
      "Extrema Deals is an e-commerce-focused platform designed around product discovery and online deals. The interface focuses on making products and categories easy to explore.",

    technologies: ["React.js", "Tailwind CSS", "Express.js"],

    features: [
      "Product browsing",
      "Category navigation",
      "Deal discovery",
      "Responsive design",
      "E-commerce interface",
    ],

    challenges: [
      "Organizing products and categories",
      "Creating an easy shopping experience",
      "Keeping the interface responsive and lightweight",
    ],

    image: "/projects/extrema-deals.webp",

    liveUrl: "https://extrema-deals.onrender.com/",
  },

  {
    slug: "bazarhost",
    number: "05",
    title: "BazarHost",
    category: "E-commerce Marketplace",

    description:
      "A full-featured e-commerce marketplace built for Bangladeshi customers.",

    longDescription:
      "BazarHost is an e-commerce marketplace designed for Bangladeshi customers. It provides a modern shopping experience with product discovery, category browsing, search, cart, and checkout-oriented functionality.",

    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Prisma",
      "Tailwind CSS",
    ],

    features: [
      "Product marketplace",
      "Product search",
      "Category browsing",
      "Shopping cart",
      "Responsive interface",
      "Modern e-commerce experience",
    ],

    challenges: [
      "Designing a scalable marketplace structure",
      "Handling product and category data",
      "Creating a smooth shopping experience",
    ],

    image: "/projects/bazarhost.webp",

    liveUrl: "https://bazarhost.com/",
  },

  {
    slug: "usa-rentalapt",
    number: "06",
    title: "USA Rentalapt",
    category: "Real Estate & Property Rental",

    description:
      "A property rental platform designed to help users discover apartments across the USA.",

    longDescription:
      "USA Rentalapt is a real estate platform focused on apartment and rental property discovery. The platform presents property information through a clean browsing experience designed for users searching for rental opportunities.",

    technologies: ["Next.js", "Tailwind CSS", "Node.js"],

    features: [
      "Property listings",
      "Rental discovery",
      "Property details",
      "Responsive layouts",
      "Search-oriented experience",
    ],

    challenges: [
      "Presenting property information clearly",
      "Creating an easy property discovery flow",
      "Designing responsive listing layouts",
    ],

    image: "/projects/usarentalapt.webp",

    liveUrl: "https://usarentalapt-liard.vercel.app/",
  },

  {
    slug: "vastly-creative",
    number: "07",
    title: "Vastly Creative",
    category: "Creative Agency & Digital Services",

    description:
      "A creative agency website showcasing media production and digital services.",

    longDescription:
      "Vastly Creative is a creative agency website designed to present services including videography, photography, media production, web development, marketing, and graphic design.",

    technologies: ["HTML", "Tailwind CSS"],

    features: [
      "Creative agency presentation",
      "Service showcase",
      "Responsive design",
      "Visual-focused sections",
      "Modern landing page",
    ],

    challenges: [
      "Presenting multiple creative services",
      "Maintaining a strong visual hierarchy",
      "Balancing content with visual presentation",
    ],

    image: "/projects/vastly.webp",

    liveUrl: "https://vastly-iota.vercel.app/",
  },

  {
    slug: "professional-portfolio",
    number: "08",
    title: "Professional Portfolio",
    category: "Personal Portfolio",

    description:
      "A professional portfolio website created to showcase development experience, projects, skills, and achievements.",

    longDescription:
      "This professional portfolio presents development experience, selected projects, technical skills, certifications, and professional achievements through a structured personal website.",

    technologies: ["HTML", "Bootstrap 5"],

    features: [
      "Project showcase",
      "Skills section",
      "Experience presentation",
      "Certification section",
      "Responsive design",
    ],

    challenges: [
      "Organizing professional information",
      "Creating a clear project showcase",
      "Presenting experience in an easy-to-scan format",
    ],

    image: "/projects/indian-potfolio.webp",

    liveUrl: "https://indian-potfolio.onrender.com/",
  },
];
