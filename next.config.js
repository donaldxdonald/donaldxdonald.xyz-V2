import { withContentCollections } from '@content-collections/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
      {
        source: '/resume',
        destination: 'https://donaldxdonald.notion.site/Zhihao-Mo-2cc2f9ba5775446eac581701f748cc6a',
        permanent: false,
      },
    ]
  },
}

export default withContentCollections(nextConfig)
