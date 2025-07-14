import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "static.nike.com",
      },
      {
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;
