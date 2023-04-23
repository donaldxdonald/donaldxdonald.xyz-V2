import { Analytics } from "@vercel/analytics/react"
import cx from "classnames"
import { inter, jost, notoSans, notoSerif } from "./fonts"
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
      <body className={cx(jost.variable, inter.variable, notoSans.variable, notoSerif.variable)}>
        <main className="flex min-h-screen w-full mx-auto justify-center max-w-4xl text-slate-800 dark:text-slate-300">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
