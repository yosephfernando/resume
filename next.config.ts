import type { NextConfig } from "next";

const basePath = "/resume";

const nextConfig: NextConfig = {
  basePath,
  output: "export",
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;