/** @type {import('next').NextConfig} */

let nextConfig = null;

if (process.env.NODE_ENV === "development") {
  nextConfig = {
    images: {
      domains: ["www.github.com"],
    },
  };
} else {
  nextConfig = {
    output: "export",
    images: {
      domains: ["www.github.com"],
    },
  };
}

module.exports = nextConfig;
