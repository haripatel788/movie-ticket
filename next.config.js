/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org'
      },
      {
        protocol: 'https',
        hostname: 'a.tiles.mapbox.com'
      },
      {
        protocol: 'https',
        hostname: 'api.mapbox.com'
      }
    ]
  },
  experimental: {
    serverActions: true
  }
};
module.exports = nextConfig;
