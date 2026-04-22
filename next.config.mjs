import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      wouter: path.resolve("./src/lib/wouter-compat.tsx"),
    };

    return config;
  },
};

export default nextConfig;
