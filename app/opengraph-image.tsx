import { ImageResponse } from "next/og"
export const runtime = "edge"

export default async function og() {
  const fontJost = await fetch(
    new URL(
      '../node_modules/@fontsource/jost/files/jost-latin-400-normal.woff',
      import.meta.url,
    ),
  ).then(res => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        tw="relative w-full h-full bg-white flex items-center justify-center bg-indigo-100 text-slate-800"
        style={{
          fontFamily: 'Jost',
          backgroundImage: `url("https://donaldxdonald.xyz/noise.png")`,
        }}
      >
        <span tw="absolute right-10 top-10 text-4xl">blog / weekly</span>
        <h1 tw="text-8xl tracking-[-0.5rem]">DonaldxDonald</h1>
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
