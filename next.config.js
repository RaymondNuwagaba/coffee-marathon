/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root to this app directory. A stray package-lock.json in
  // the parent folder otherwise makes Turbopack infer the wrong root and fail
  // to resolve dependencies (e.g. tailwindcss).
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
}

module.exports = nextConfig
