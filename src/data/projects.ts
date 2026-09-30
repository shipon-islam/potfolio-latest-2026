export type Project = {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  category:
    | "E-commerce"
    | "Marketplace"
    | "Business"
    | "Community"
    | "Personal"
    | "Healthcare & Wellness"
    | "Real Estate & Property Rental"
    | "Software & Technology"
    | "Creative Agency & Digital Services"
    | "E-commerce & Online Shopping"
    | "Community & Religious";
  imageUrl: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  github: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "01",
    slug: "darul-hikmah-islamic-center",
    title: "Darul Hikmah Islamic Center",
    metaTitle: "USA Mosque Community Platform",
    category: "Community & Religious",
    imageUrl: "/projects/dhic.webp",
    description:
      "A community-focused platform designed to connect Muslims with mosques and Islamic centers across the USA.",
    longDescription:
      "A community-focused platform designed to connect Muslims with mosques and Islamic centers across the USA, providing access to mosque information, prayer-related details, events, and community resources. The platform offers a simple and accessible way for users to discover and stay connected with local Islamic communities.",
    technologies: ["Next.js", "Tailwind css", "Firebase"],
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
    github: "https://github.com/shipon-islam/darul-hikmah-islamic-center",
    liveUrl: "https://usamosque.vercel.app/",
  },
  {
    id: "02",
    slug: "gentlemend",
    title: "Gentlemend booking platform",
    metaTitle: "Men’s Aesthetic & Wellness Booking Platform",
    category: "Healthcare & Wellness",
    imageUrl: "/projects/gentlement.webp",
    description: "A men's self-care treatment discovery and booking platform.",
    longDescription:
      "A full-featured men’s self-care treatment discovery and booking platform, designed to help users explore, compare and book aesthetic, wellness, hair, skin, dental and body treatments. The platform provides fast search, category-based discovery, trusted clinic listings and a streamlined booking experience tailored specifically for men",
    technologies: ["React.js", "Tailwind CSS", "Node.js"],
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
    github: "https://github.com/shipon-islam/gentlemend-booking-platform",
    liveUrl: "https://gentlemend-booking-platform.vercel.app/",
  },

  {
    id: "03",
    slug: "hcl-software",
    title: "HCL Software",
    metaTitle: "HCL Software & Technology Services Website",
    category: "Software & Technology",
    imageUrl: "/projects/hcl-software.webp",
    description:
      "A modern software company website focused on presenting digital solutions and technology services.",
    longDescription:
      "A modern software company website designed to showcase digital solutions, software services, and technology expertise. The platform presents services and business offerings through a clean, professional interface, helping potential clients explore solutions and connect with the company.",
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
    github: "https://github.com/shipon-islam/hcl-softwar",
    liveUrl: "https://hcl-softwar.vercel.app/",
  },
  {
    id: "04",
    slug: "extrema-deals",
    title: "Extrema Deals",
    metaTitle: "Online Shopping And Deals Platform",
    category: "E-commerce & Online Shopping",
    imageUrl: "/projects/extrema-deals.webp",
    longDescription:
      "An online shopping platform designed to help customers discover products, explore different categories, and find attractive deals in one place. The platform focuses on smooth product browsing and a convenient shopping experience, making it easy for users to explore products and make purchasing decisions.",
    description:
      "An online shopping and deals platform for discovering products and attractive offers.",
    technologies: ["React.js", "Tailwind CSS", "Express js"],
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
    github: "https://github.com/shipon-islam/extrema-deals",
    liveUrl: "https://extrema-deals.onrender.com/",
  },
  {
    id: "05",
    slug: "bazarhost",
    title: "BazarHost",
    metaTitle: "Marketplace with products, search and checkout",
    category: "E-commerce",
    imageUrl: "/projects/bazarhost.webp",
    description:
      "A full-featured e-commerce marketplace built for Bangladeshi customers.",
    longDescription:
      "A full-featured e-commerce marketplace built for Bangladeshi customers, with product discovery, category browsing, search, cart and checkout experiences. The platform is designed for fast navigation and scalable product management, providing a smooth shopping experience across electronics, fashion, home & living, and more.",
    technologies: ["Next.js", "TypeScript", "MongoDB"],
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
    github: "https://github.com/shipon-islam/bazarhost",
    liveUrl: "https://bazarhost.com/",
  },
  {
    id: "06",
    slug: "usa-rentalapt",
    title: "USA Rentalapt",
    metaTitle: "USA Apartment Rental Platform",
    category: "Real Estate & Property Rental",
    imageUrl: "/projects/usarentalapt.webp",
    description:
      "A property rental platform designed to help users discover apartments across the USA.",
    longDescription:
      "A modern real estate platform focused on helping users find apartments and rental properties across the USA, with property search, location-based browsing, detailed listings, and essential property information. The platform offers a clean and intuitive experience for exploring available rentals and finding suitable homes.",
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
    github: "https://github.com/shipon-islam/usarentalapt",
    liveUrl: "https://usarentalapt-liard.vercel.app/",
  },

  {
    id: "07",
    slug: "vastly-creative",
    title: "Vastly Creative",
    metaTitle: "A Creative Digital Agency Website",
    category: "Creative Agency & Digital Services",
    imageUrl: "/projects/vastly.webp",
    description:
      "A creative agency website showcasing media production and digital services.",
    longDescription:
      "A creative agency website showcasing services across videography, photography, media production, web development, marketing, and graphic design. The platform presents the agency’s work and capabilities through a visually engaging interface, helping potential clients explore services and get in touch for new projects.",
    technologies: ["HTML", "Tailwind Css"],
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
    github: "https://github.com/shipon-islam/bazarhost",
    liveUrl: "https://vastly-iota.vercel.app/",
  },

  {
    id: "08",
    slug: "professional-portfolio",
    title: "Professional Portfolio",
    metaTitle: "Professional Developer Portfolio Showcasing Projects",
    category: "Personal",
    imageUrl: "/projects/indian-potfolio.webp",
    description:
      "A professional portfolio website created to showcase development experience, projects, skills, and achievements.",
    longDescription:
      "A personal developer portfolio created to showcase application development experience, selected projects, technical expertise, and professional achievements. The website organizes portfolio work across websites, mobile applications, and AI projects, while highlighting skills, certifications, client feedback, and professional experience.",
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
    github: "https://github.com/shipon-islam/indian-potfolio",
    liveUrl: "https://indian-potfolio.onrender.com/",
  },
];
