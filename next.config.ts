import type { NextConfig } from "next";

export const BASE_PATH = "/resume";

const nextConfig: NextConfig = {
  basePath: BASE_PATH,
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;