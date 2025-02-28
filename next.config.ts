import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  async rewrites() {
      return [
          {
              source: "/api/:path*",
              destination: "https://your-vercel-app.vercel.app/api/:path*",
          },
      ];
  },
};

export default nextConfig;
