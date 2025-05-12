import { withContentCollections } from '@content-collections/next'
import Icons from 'unplugin-icons/webpack'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.donaldxdonald.xyz',
      'i.scdn.co',
    ],
  },
  webpack(config) {
    config.plugins.push(
      Icons({
        autoInstall: true,
        compiler: 'jsx',
        jsx: 'react',
      }),
    )
    return config
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

export default withContentCollections(nextConfig)
