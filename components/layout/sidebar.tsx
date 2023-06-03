'use client'

import { Rss, Triangle } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentProps } from "react"
import { SocialLinks } from "../../lib/constants"

export default function Sidebar({ className }: ComponentProps<'aside'>) {
  const pathSegments = usePathname().split('/')
  const proseType = pathSegments[1]

  return (
    <aside className={`h-screen hidden fixed top-0 md:flex flex-col items-center px-2 py-28 left-[10%] -translate-x-full xl:left-1/2 xl:-translate-x-[34rem] ${className}`}>

      <Link href='/' className="rounded-md p-2 hover:bg-purple-500 hover:text-purple-50">
        <Triangle className='w-5 h-5'></Triangle>
      </Link>
      <nav className="flex flex-col gap-3 mt-auto">
        {
          proseType && (
            <Link href={`/${proseType}.xml`} target="__blank" className="rounded-md p-2 animate-fade-up hover:bg-purple-500 hover:text-purple-50">
              <Rss className='w-5 h-5'></Rss>
            </Link>
          )
        }
        {
          SocialLinks.map(item => (
            <Link href={item.link} key={item.link} target="__blank" className="rounded-md p-2 hover:bg-purple-500 hover:text-purple-50">
              <item.icon className='w-5 h-5'></item.icon>
            </Link>
          ))
        }
      </nav>
    </aside>
  )
}
