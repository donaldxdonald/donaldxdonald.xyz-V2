import { Analytics } from "@vercel/analytics/react"
import cx from "classnames"
import { inter, jost } from "./fonts"
import "./globals.css"

export const metadata = {
  title: "DonaldxDonald",
  description:
    "Donald Mok's digital garden",
  twitter: {
    card: "summary_large_image",
    title: "DonaldxDonald",
    description:
      "Donald Mok's digital garden",
    creator: "@donaldxdonald",
  },
  metadataBase: new URL("https://donaldxdonald.xyz"),
  themeColor: "#faf5ff",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cx(inter.variable, jost.variable)}>
        <div className="fixed h-screen w-full bg-purple-50 dark:bg-purple-950" />
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 text-slate-800 dark:text-slate-300">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
