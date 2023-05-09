import { allWeeklies } from "contentlayer/generated"
import { ImageResponse } from "next/server"

export const runtime = "edge"

export default async function og({ params }: {params: {slug: string}}) {
  const fontJost = await fetch(
    new URL(
      '../../../node_modules/@fontsource/jost/files/jost-latin-400-normal.woff',
      import.meta.url,
    ),
  ).then(res => res.arrayBuffer())

  const post = allWeeklies.find(v => v.slug === params.slug)
  const {
    title = 'Cannot find post',
  } = post || {}

  return new ImageResponse(
    (
      <div
        tw="relative w-full h-full bg-white flex items-center justify-center bg-purple-200 text-slate-800"
        style={{
          fontFamily: 'Jost',
          backgroundImage: `url("${new URL('../../../public/noise.png', import.meta.url).toString()}")`,
        }}
      >
        <span tw="absolute left-10 top-10 text-4xl">DonaldxDonald</span>
        <span tw="absolute right-10 top-10 text-4xl">Weekly</span>
        <h1 tw="text-7xl tracking-tighter mx-5">{title}</h1>
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
