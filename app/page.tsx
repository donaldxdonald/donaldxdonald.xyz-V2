import { Viewport } from 'next'
import { AnimatedMonoLogue } from '@/components/AnimatedMonologue'
import { SocialLinks } from '../lib/constants'

export const viewport: Viewport = {
  themeColor: '#faf5ff',
}

export default async function Home() {
  return (
    <div className="z-10 max-w-2xl py-32 flex flex-col justify-center">
      <AnimatedMonoLogue></AnimatedMonoLogue>
      <ul className="flex items-center justify-center">
        {
          SocialLinks.map((item, index) => (
            <a
              key={item.link}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="animate-fade-up mx-2 opacity-0 text-base md:text-xl mb-3 flex max-w-fit items-center font-display text-purple-900 justify-center space-x-2 overflow-hidden rounded-md p-2 transition-colors hover:bg-purple-200/70"
              style={{ animationDelay: `${0.7 + index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <item.icon className="w-5 h-5" />
            </a>
          ))
        }
      </ul>
    </div>
  )
}
