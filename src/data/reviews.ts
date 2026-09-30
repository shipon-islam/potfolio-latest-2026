export type Review = {
  quote: string;
  name: string;
  role: string;
  country: string;
  rating: number;
  avatar?: string;
  source?: { label: string; href: string };
};
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
