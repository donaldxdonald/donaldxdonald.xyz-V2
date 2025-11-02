'use client'

import { RootProvider } from 'fumadocs-ui/provider/next'
import Sidebar from '@/components/layout/sidebar'
import DefaultSearchDialog from '../../components/Search'
import SearchButton from '../../components/SearchButton'

export default function ProseLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <RootProvider search={{
      SearchDialog: DefaultSearchDialog,
    }}
    >
      <SearchButton />
      <section className="w-[90%] md:w-3/4 font-display">
        <Sidebar></Sidebar>
        {children}
      </section>
    </RootProvider>
  )
}
