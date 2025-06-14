/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable ESLint during builds for production quality
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Enable TypeScript type checking during builds
  typescript: {
    ignoreBuildErrors: false,
  },
  // Enable Next.js image optimization
  images: {
    unoptimized: false,
  },
}

export default nextConfig