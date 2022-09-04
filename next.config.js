require('dotenv').config();
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GRAPHCMS_URL : process.env.GRAPHCMS_URL,
    GRAPHCMS_TOKEN: process.env.GRAPHCMS_TOKEN
  },
  images: {
    domains: ['media.graphassets.com'],
  }
}

module.exports = nextConfig
