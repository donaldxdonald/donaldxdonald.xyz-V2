import { Github, LucideIcon, Mail, Triangle } from "lucide-react"
import Link from "next/link"

type NavItem = {
  icon: LucideIcon
  link: string
}

export default function Sidebar() {
  const navButtons: NavItem[] = [
    {
      icon: Github,
      link: '/github',
    },
    {
      icon: Mail,
      link: 'mailto:donaldxdonald@duck.com',
    },
  ]

  return (
    <aside className="h-screen hidden fixed top-0 left-1/10 -translate-x-[200%] md:flex flex-col items-center px-2 py-28">

      <Link href='/' className="rounded-md p-2 hover:bg-purple-500 hover:text-purple-50">
        <Triangle className='w-5 h-5'></Triangle>
      </Link>
      <nav className="flex flex-col gap-3 mt-auto">
        {
          navButtons.map(item => (
            <Link href={item.link} key={item.link} className="rounded-md p-2 hover:bg-purple-500 hover:text-purple-50">
              <item.icon className='w-5 h-5'></item.icon>
            </Link>
          ))
        }
      </nav>
    </aside>
  )
}
