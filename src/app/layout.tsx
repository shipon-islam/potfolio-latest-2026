import Backdrop from "@/components/Backdrop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollToTop from "@/components/ScrollToTop";
import PersonSchema from "@/components/seo/PersonSchema";
import Spotlight from "@/components/Spotlight";
import { site } from "@/lib/site";
import type { Metadata, Viewport } from "next";
import { Manrope, Unbounded } from "next/font/google";
import "./globals.css";

const display = Unbounded({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const description = `${site.name} is a ${site.role} with ${site.experience} of experience, building websites and web apps with React, Next.js, TypeScript, Node.js, Express, Python, Tailwind CSS, Docker and n8n. Currently at ${site.company}.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description,
  applicationName: `${site.name} — Portfolio`,
  authors: [{ name: site.name, url: site.siteUrl }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  keywords: [
    site.name,
    "full-stack web developer",
    "full-stack developer Bangladesh",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "Express.js developer",
    "TypeScript developer",
    "Python developer",
    "Tailwind CSS developer",
    "Docker developer",
    "n8n automation developer",
    "freelance web developer",
    "frontend web developer",
    "frontend web developer bangladesh",
  ],
  alternates: { canonical: "/" },
  icons: { icon: "/icon.png", apple: "/icon.png" },
  openGraph: {
    type: "website",
    url: site.siteUrl,
    siteName: `${site.name} — ${site.role}`,
    title: `${site.name} | ${site.role}`,
    description,
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name}, ${site.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description,
    images: ["/portrait.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#150f33" },
    { media: "(prefers-color-scheme: light)", color: "#f3f7fc" },
  ],
};

// Runs before paint so the saved theme never flashes. Dark is the default.
// It also marks the document as scripted: globals.css only hides the
// `[data-reveal]` elements under `html.js`, so a visitor without JavaScript (or
// with a broken bundle) sees the finished page instead of a blank one.
const themeScript = `
try {
  document.documentElement.classList.add('js');
  const t = localStorage.getItem('theme');
  const theme = t === 'light' || t === 'dark' ? t : 'dark';

  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.toggle('dark', theme === 'dark');
} catch (e) {
  document.documentElement.dataset.theme = 'dark';
  document.documentElement.classList.add('dark');
}
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${display.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <PersonSchema />
        {/* Global: the drifting colour fields and grid behind every section. */}
        <Header />
        <Backdrop />

        {children}
        {/* Global: appears once the visitor scrolls past the first screen. */}
        <ScrollToTop />
        {/* Global: cursor spotlight for the whole page (see globals.css). */}
        <Spotlight />
        {/* Global: fades each `data-reveal` element in as it scrolls into view. */}
        <ScrollReveal />
        <Footer />
      </body>
    </html>
  );
}
