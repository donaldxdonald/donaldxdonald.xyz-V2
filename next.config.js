import { createMDX } from 'fumadocs-mdx/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.donaldxdonald.xyz',
      },
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
