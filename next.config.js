/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: true
  },
  images: {
    domains: ['res.cloudinary.com']
  },
  async redirects() {
    return [
      {
        source: '/actualites',
        destination: '/actualites/page/1',
        permanent: true
      },
      {
        source: '/actualites/page',
        destination: '/actualites/page/1',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
