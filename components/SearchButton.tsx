'use client'
import { useSearchContext } from 'fumadocs-ui/contexts/search'
import { Search } from 'lucide-react'
import { motion } from 'motion/react'

export default function SearchButton() {
  const { setOpenSearch } = useSearchContext()
  return (

    <motion.div
      className="fixed right-6 top-6 [--y:-10px] sm:[--y:-9999px]!"
      animate={{ 'opacity': 1, '--y': 0 }}
      initial={{ opacity: 0, y: 'var(--y)' }}
    >
      <button
        type="button"
        className="rounded-lg p-2.5 bg-white border border-theme/20 cursor-pointer"
        onClick={() => setOpenSearch(true)}
      >
        <Search className="size-5"></Search>

      </button>
    </motion.div>
  )
}
