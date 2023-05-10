import dayjs from "dayjs"
import { ImageResponse, NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(req: NextRequest) {
  const fontJost = await fetch(
    new URL(
      '../../node_modules/@fontsource/jost/files/jost-latin-400-normal.woff',
      import.meta.url,
    ),
  ).then(res => res.arrayBuffer())

  const params = req?.nextUrl?.searchParams
  const title = (params && params.get('title')) || 'Cannot find title'
  const date = (params && params.get('date')) || Date.now().toString()

  return new ImageResponse(
    (
      <div
        tw="relative w-full h-full bg-white flex items-center justify-center bg-purple-200 text-slate-800"
        style={{
          fontFamily: 'Jost, system-ui, sans-serif',
          backgroundImage: `url("${new URL('../../public/noise.png', import.meta.url).toString()}")`,
        }}
      >
        <span tw="absolute left-10 top-10 text-4xl">@donaldxdonald</span>
        <span tw="absolute right-10 top-10 text-4xl">{dayjs(date).format('YYYY-MM-DD')}</span>
        <h1 tw="text-7xl tracking-tighter mx-5">{decodeURIComponent(title)}</h1>
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
