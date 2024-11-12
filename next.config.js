/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["gsap"],
  images: {
    domains: ["articul8.s3.us-east-1.amazonaws.com"],
  },
};

module.exports = nextConfig;
