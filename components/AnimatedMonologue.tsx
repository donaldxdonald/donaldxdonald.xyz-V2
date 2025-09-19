'use client'

import { Link } from 'next-view-transitions'
import { MONOLOGUE } from '../lib/constants'
import { TextEffect } from './motion/text-effect'

const wordMap: Record<number, { route: string }> = {
  32: {
    route: '/listening',
  },
  42: {
    route: '/blog',
  },
  48: {
    route: '/weekly',
  },
}

export const AnimatedMonoLogue = () => {
  return (
    <TextEffect
      preset="fade-in-blur"
      speedReveal={3}
      speedSegment={1.2}
      className="text-center mb-20 opacity-0 text-3xl md:text-5xl !leading-normal font-light font-display tracking-tighter"
      renderSegment={(segment, index) => (
        wordMap[index]
          ? <Link className="decoration-purple-300 underline hover:text-slate-500" href={wordMap[index].route}>{segment}</Link>
          : <span>{segment}</span>
      )}
    >
      {MONOLOGUE}
    </TextEffect>
  )
}
