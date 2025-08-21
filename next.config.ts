import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  devIndicators: false,
  images: {
    domains: ["i.pinimg.com", "cdn-icons-png.flaticon.com"],
  },
};

export default nextConfig;
