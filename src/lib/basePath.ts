// Base path helper for assets served from the public/ folder
// In production (GitHub Pages), assets are served under the repository subpath
// In development, basePath is empty
const basePath = process.env.NODE_ENV === 'production' ? '/scholarship-portal' : ''

export default basePath
