import Link from "next/link"

export default function SideBar() {
  const navItems: Array<{
    text?: string
    route: string
  }> = [
    {
      text: 'Home',
      route: '/',
    },
    {
      text: 'Blog',
      route: '/blog',
    },
    {
      text: 'Weekly',
      route: '/weekly',
    },
  ]

  return <aside className="flex h-4/5 flex-col gap-3 justify-end">
    {
      navItems.map(({ route, text }) => (
        <Link className="rounded-md cursor-pointer text-lg text-purple-800 hover:text-slate-900 hover:bg-purple-200 px-3 py-1" key={route} href={route}>{text}</Link>
      ))
    }
  </aside>
}
