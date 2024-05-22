'use client'

import Sidebar from "@/components/layout/sidebar"
import { SearchContext } from "../../components/SearchContext"

export default function ProseLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <section className="w-[90%] md:w-3/4 font-display">
      <Sidebar></Sidebar>
      {children}
      <SearchContext></SearchContext>
    </section>
  )
}
