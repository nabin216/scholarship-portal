/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repoName = 'scholarship-scanner-frontend'

const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static HTML export for GitHub Pages
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
      {
        protocol: 'http',
        hostname: '13.61.181.192',
      },
      {
        protocol: 'http',
        hostname: '13.62.43.154',
      },
    ],
    unoptimized: true // Required for static export
  },
  // Base path for GitHub Pages repository subdirectory
  basePath: isProd ? `/${repoName}` : '',
  // assetPrefix is not needed when basePath is set - basePath applies to all assets automatically
  trailingSlash: true, // Required for GitHub Pages
};

module.exports = nextConfig;