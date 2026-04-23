import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

module.exports = {
  images: {
    domains: ["dkstatics-public.digikala.com"],
  },
};

export default nextConfig;
