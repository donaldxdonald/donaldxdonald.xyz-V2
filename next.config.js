const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
      {
        source: "/twitter",
        destination: "https://twitter.com/donaldxdonald",
        permanent: false,
      },
    ]
  },
}

module.exports = withContentlayer(nextConfig)
