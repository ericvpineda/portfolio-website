/** @type {import('next').NextConfig} */

const nextConfig = {
  output: process.env.NODE_ENV === "development" ? "" : "export",
  images: {
    domains: ["www.github.com"],
  },
};

module.exports = nextConfig;
