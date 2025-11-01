import { createMDX } from 'fumadocs-mdx/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.donaldxdonald.xyz',
      'i.scdn.co',
    ],
  },

  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/donaldxdonald',
        permanent: false,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/donaldxdonald',
        permanent: false,
      },
    ]
  },
}

const withMDX = createMDX()

export default withMDX(nextConfig)
