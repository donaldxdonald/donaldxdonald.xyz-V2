import Sidebar from "@/components/layout/sidebar"

export default function ProseLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <section className="w-[90%] md:w-3/4 font-display">
      <Sidebar></Sidebar>
      {children}
    </section>
  )
}
