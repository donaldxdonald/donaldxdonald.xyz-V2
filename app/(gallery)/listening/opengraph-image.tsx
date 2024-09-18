import { ImageResponse } from 'next/og'
import { Track } from './type'

// eslint-disable-next-line react-refresh/only-export-components
export const runtime = 'edge'

export default async function OGImage() {
  const tracks = await fetch(new URL('../../../content/json/tracks.json', import.meta.url).toString())
    .then(res => res.json() as Promise<Track[]>)

  const fontNotoSerif = await fetch(
    new URL(
      '../../../node_modules/@fontsource/noto-serif/files/noto-serif-latin-400-normal.woff',
      import.meta.url,
    ),
  ).then(res => res.arrayBuffer())

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full px-8 justify-center bg-sky-100 text-sky-800">
        <h2 tw="flex items-baseline justify-between font-bold tracking-tighter" style={{ fontFamily: 'Noto Serif' }}>
          <span tw="text-5xl">Listening</span>
          <span tw="text-xl">@donaldxdonald</span>
        </h2>
        <div tw="relative flex flex-wrap mt-3 justify-around w-full max-h-[70%]" style={{ gap: '0.1rem' }}>
          {
            tracks.map(track => (
              <img key={track.url} tw="w-30 h-30" src={track.album.image.url} width={track.album.image.width} height={track.album.image.height} alt={track.album.name}></img>
            ))
          }
          <span
            tw="absolute -bottom-1/4 -left-1/2 w-[200%] h-full"
            style={{
              background: 'linear-gradient(0deg, rgba(224, 242, 254,1) 0%, rgba(224,242,254,0.6) 50%, rgba(224,242,254,0) 100%)',
            }}
          >
          </span>
        </div>
      </div>
    ),
    {
      width: 800,
      height: 420,
      fonts: [
        {
          name: 'Noto Serif',
          data: fontNotoSerif,
        },
      ],
    },
  )
}
