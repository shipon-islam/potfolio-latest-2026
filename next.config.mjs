/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Only the Dockerfile sets BUILD_STANDALONE=1. It makes the build emit
  // .next/standalone so the image can run a tiny self-contained server.
  // A normal `npm run build` (Render, Vercel, local) is not affected.
  output: process.env.BUILD_STANDALONE === "1" ? "standalone" : undefined,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;

