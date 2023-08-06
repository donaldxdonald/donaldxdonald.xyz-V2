import dayjs from "dayjs"

type CompProps = {
  title: string
  type: string
  date: string
}

export default function PostOG({ title, type, date }: CompProps) {
  return (
    <div
      tw="relative w-full h-full bg-white flex items-center justify-center bg-purple-200 text-slate-800"
      style={{
        fontFamily: 'Jost',
        backgroundImage: `url("https://donaldxdonald.xyz/noise.png")`,
      }}
    >
      <span tw="absolute left-10 top-10 text-4xl">Donaldx{type.toUpperCase()}</span>
      <span tw="absolute right-10 top-10 text-4xl">{dayjs(date).format('YYYY-MM-DD')}</span>
      <h1 tw="text-7xl tracking-tighter mx-5">{title}</h1>
    </div>
  )
}
