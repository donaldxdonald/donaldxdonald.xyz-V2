import { Analytics } from '@vercel/analytics/react'
import cx from 'classnames'
import { Metadata } from 'next'
import '../assets/styles/cmdk.scss'
import { inter, jost, notoSans, notoSerif } from './fonts'
import './globals.css'

const metaTitle = 'DonaldxDonald'
const metaDesc = 'Donald Mok\'s digital garden'
export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  twitter: {
    card: 'summary_large_image',
    title: metaTitle,
    description: metaDesc,
    creator: '@donaldxdonald',
  },
  openGraph: {
    title: metaTitle,
    description: metaDesc,
  },
  metadataBase: new URL('https://donaldxdonald.xyz'),
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cx(jost.variable, inter.variable, notoSans.variable, notoSerif.variable, 'bg-sky-50')}>
        <main className="flex min-h-screen w-full mx-auto justify-center max-w-4xl text-slate-800 dark:text-slate-300">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
