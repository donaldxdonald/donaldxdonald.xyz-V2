import Tracks from 'content/json/tracks.json'
import { CSSProperties } from 'react'
import { Track } from './type'

const gridLayout: CSSProperties = {
  gridTemplateColumns: 'repeat(auto-fill, minmax(12em, 1fr))',
}

export default function ListeningPage() {
  const tracks = JSON.parse(JSON.stringify(Tracks)) as Track[]

  return (
    <div className='w-5/6 mx-auto xl:w-full'>
      <h1 className="text-4xl font-serif">Listening</h1>
      <div className="mt-16 mb-36">
        <ul className='grid gap-6' style={gridLayout}>
          {
            tracks.map((v, i) => (
              <a href={v.url} key={v.url}
                className='relative opacity-0 cursor-pointer animate-fade-up aspect-square drop-shadow-md hover:drop-shadow-2xl transition-all group'
                style={{
                  animationDelay: `${i * 0.07}s`,
                  animationFillMode: 'forwards',
                }}
              >
                <img className='aspect-square' src={v.album.image.url} alt={v.name}></img>
                <p
                  className='absolute left-0 bottom-0 w-full text-sm bg-indigo-800 text-indigo-100 px-2 py-1 truncate opacity-0 transition-all group-hover:animate-fade-up'
                  style={{
                    animationFillMode: 'forwards',
                    animationDuration: '100ms',
                  }}>{v.name} - {v.authorName}</p>
              </a>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
