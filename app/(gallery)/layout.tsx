import Sidebar from '@/components/layout/sidebar'

export default function GalleryLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <section className="w-full font-display mt-16">
      <Sidebar></Sidebar>
      {children}
    </section>
  )
}
