/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  swcMinify: true,
  images: {
    domains: ["cdn.donaldxdonald.xyz"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/donaldxdonald",
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
