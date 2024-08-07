import { Inter, Jost, Noto_Sans_SC, Noto_Serif_SC } from 'next/font/google'

export const inter = Inter({
  weight: 'variable',
  variable: '--font-inter',
  subsets: ['latin'],
})

export const notoSerif = Noto_Serif_SC({
  weight: ['400', '700'],
  variable: '--font-serif',
  subsets: ['latin'],
})

export const notoSans = Noto_Sans_SC({
  weight: ['400', '700'],
  variable: '--font-sans',
  subsets: ['latin'],
})

export const jost = Jost({
  weight: 'variable',
  variable: '--font-jost',
  fallback: ['--font-sans'],
  subsets: ['latin'],
})
