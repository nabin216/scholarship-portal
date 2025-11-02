/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Remove 'standalone' for Netlify deployment
  // output: 'standalone', // Only for server deployment on EC2
  images: {
    domains: ['example.com', '13.61.181.192', '13.62.43.154'], // Add your image domains here
    unoptimized: true // For better compatibility
  },
  // API configuration
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://13.62.43.154:8000/api'}/:path*`
      }
    ];
  },
  // Ensure trailing slashes work correctly
  trailingSlash: false,
};

module.exports = nextConfig;