import { ImageResponse } from "next/server"

export const runtime = "edge"

export default async function og() {
  const fontJost = await fetch(
    new URL(
      '../node_modules/@fontsource/jost/files/jost-latin-300-normal.woff',
      import.meta.url,
    ),
  ).then(res => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        tw="relative w-full h-full bg-white flex items-center justify-center bg-purple-200"
        style={{
          fontFamily: 'Jost',
          backgroundImage: new URL('../public/noise.png', import.meta.url).toString(),
        }}
      >
        <span tw="absolute right-10 top-10 text-2xl text-slate-800">blog / weekly</span>
        <h1 tw="text-6xl tracking-tighter text-slate-800">DonaldxDonald</h1>
      </div>

    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Jost',
          data: fontJost,
        },
      ],
    },
  )
}
