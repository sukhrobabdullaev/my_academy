/** @type {import('next').NextConfig} */

const { withNextVideo } = require('next-video/process');

const nextConfig = {
  env: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "media.dev.to" },
      { protocol: "https", hostname: "img.clerk.com" },
    ],
  },
};

module.exports = withNextVideo(nextConfig);
