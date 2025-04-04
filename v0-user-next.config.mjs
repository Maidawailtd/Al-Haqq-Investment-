/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/investments',
        destination: '/services',
        permanent: false,
      },
      {
        source: '/team',
        destination: '/about',
        permanent: false,
      },
      {
        source: '/account',
        destination: '/dashboard',
        permanent: false,
      },
      {
        source: '/forgot-password',
        destination: '/login',
        permanent: false,
      }
    ]
  },
  images: {
    domains: ['v0.blob.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v0.blob.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig

