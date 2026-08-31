import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "media.rawg.io", 
        pathname: "/media/games/**", 
      },
    ],
  },
};

export default nextConfig;
