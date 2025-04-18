'use client'

import { Link } from 'next-view-transitions'
import { useRouter } from 'next/navigation'
import ArrowLeft from '~icons/line-md/arrow-left.jsx'

export const TOC = ({ tableOfContents, hrefPrefix }: { tableOfContents: { depth: number; text: string; slug: string }[]; hrefPrefix: string }) => {
  const router = useRouter()

  return (
    <ul className="hidden md:flex flex-col min-w-[7rem] max-w-md">
      <button type="button" className="w-full flex items-center gap-2 px-3 text-sm rounded hover:bg-purple-100 py-2 mb-3 opacity-30 hover:opacity-100 transition-opacity duration-100" onClick={() => router.back()}>
        <ArrowLeft className="w-4 h-4"></ArrowLeft>
        <span>返回</span>
      </button>
      {
        tableOfContents.map(v => (
          <Link className="w-full truncate px-3 py-2 text-sm opacity-30 hover:opacity-100 transition-opacity duration-100" key={v.text} href={`${hrefPrefix}/#${v.slug}`}>{v.text}</Link>
        ))
      }
    </ul>
  )
}
