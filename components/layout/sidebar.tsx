'use client'

import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react'
import { Rss } from 'lucide-react'
import { motion } from 'motion/react'
import { SocialLinks } from '../../lib/constants'

const MotionLink = motion.create(Link)

export default function Sidebar({ className }: ComponentProps<'aside'>) {
  const pathSegments = usePathname().split('/')
  const proseType = pathSegments[1]

  return (
    <aside className={`h-screen hidden fixed top-0 md:flex flex-col items-center px-2 py-28 left-[10vw] -translate-x-full xl:left-[50vw] xl:-translate-x-136 ${className}`}>

      <MotionLink href="/" className="rounded-md p-2" whileHover={{ scale: 1.5, rotate: 360 }} whileTap={{ scale: 0.9 }}>
        <svg className="w-8 h-8" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="10" fill="url(#paint0_linear_17_114)" />
          <defs>
            <linearGradient id="paint0_linear_17_114" x1="1.79862e-07" y1="10" x2="20" y2="10" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4338CA" />
              <stop offset="1" stopColor="white" stopOpacity="0.59" />
            </linearGradient>
          </defs>
        </svg>
      </MotionLink>
      <nav className="flex flex-col gap-3 mt-auto">
        {
          proseType && proseType !== 'listening' && (
            <Link href={`/${proseType}.xml`} target="__blank" className="rounded-md p-2 animate-fade-up hover:bg-purple-500 hover:text-purple-50">
              <Rss className="size-5"></Rss>
            </Link>
          )
        }
        {
          SocialLinks.map(item => (
            <Link href={item.link} key={item.link} target="__blank" className="rounded-md p-2 hover:bg-purple-500 hover:text-purple-50">
              <item.icon className="size-5"></item.icon>
            </Link>
          ))
        }
      </nav>
    </aside>
  )
}
