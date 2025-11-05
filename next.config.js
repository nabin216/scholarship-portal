/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repoName = 'scholarship-scanner-frontend'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // Enable static HTML export for GitHub Pages
  images: {
    domains: ['example.com', '13.61.181.192', '13.62.43.154'],
    unoptimized: true // Required for static export
  },
  // Base path for GitHub Pages repository subdirectory
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  trailingSlash: true, // Required for GitHub Pages
};

module.exports = nextConfig;