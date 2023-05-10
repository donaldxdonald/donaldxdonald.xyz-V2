import { Triangle } from "lucide-react"
import Link from "next/link"
import { SocialLinks } from "../../lib/constants"

export default function Sidebar() {
  return (
    <aside className="h-screen hidden fixed top-0 left-[10%] -translate-x-full xl:left-1/2 xl:-translate-x-[34rem] md:flex flex-col items-center px-2 py-28">

      <Link href='/' className="rounded-md p-2 hover:bg-purple-500 hover:text-purple-50">
        <Triangle className='w-5 h-5'></Triangle>
      </Link>
      <nav className="flex flex-col gap-3 mt-auto">
        {
          SocialLinks.map(item => (
            <Link href={item.link} key={item.link} className="rounded-md p-2 hover:bg-purple-500 hover:text-purple-50">
              <item.icon className='w-5 h-5'></item.icon>
            </Link>
          ))
        }
      </nav>
    </aside>
  )
}
