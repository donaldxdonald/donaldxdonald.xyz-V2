import dayjs from "dayjs"
import { ImageResponse, NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(req: NextRequest) {
  const fontNotoSerif = await fetch(
    new URL(
      '../../node_modules/@fontsource/noto-serif/files/noto-serif-latin-400-normal.woff',
      import.meta.url,
    ),
  ).then(res => res.arrayBuffer())

  const params = req?.nextUrl?.searchParams
  const title = (params && params.get('title')) || 'Cannot find title'
  const date = (params && params.get('date')) || Date.now().toString()

  return new ImageResponse(
    (
      <div
        tw="relative w-full h-full bg-white flex items-end bg-indigo-100 text-slate-800"
        style={{
          fontFamily: '"Noto Serif", system-ui, sans-serif',
          backgroundImage: `url("https://donaldxdonald.xyz/noise.png")`,
        }}
      >
        <span tw="absolute left-20 top-20 text-4xl">@donaldxdonald</span>
        <span tw="absolute right-20 top-20 text-4xl">{dayjs(date).format('YYYY-MM-DD')}</span>
        <h1 tw="mx-20 mb-20 text-7xl tracking-tighter">{decodeURIComponent(title)}</h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Noto Serif',
          data: fontNotoSerif,
        },
      ],
    },
  )
}
