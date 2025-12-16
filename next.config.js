/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable modern image optimization
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
