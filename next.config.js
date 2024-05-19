const { withContentlayer } = require('next-contentlayer2')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "cdn.donaldxdonald.xyz",
      "i.scdn.co",
    ],
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
