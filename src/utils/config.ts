/**
 * Environment configuration utility
 * 
 * This utility provides access to environment variables with sensible defaults
 * and type checking. It helps maintain consistency across the application.
 */

export const config = {
  // API Configuration
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  
  // Authentication Settings
  jwtExpiry: parseInt(process.env.NEXT_PUBLIC_JWT_EXPIRY || '3600'),
  
  // Add more configuration variables as needed
  // Feature Flags
  enableSocialAuth: process.env.NEXT_PUBLIC_ENABLE_SOCIAL_AUTH === 'true',
};

/**
 * Get the full API URL for a specific endpoint
 * @param {string} path - The API endpoint path
 * @returns {string} The complete API URL
 */
export const getApiUrl = (path: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return `${config.apiUrl}/${cleanPath}`;
};

export default config;
