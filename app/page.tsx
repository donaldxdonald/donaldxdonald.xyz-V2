import { Github, Mail } from "lucide-react"
import Link from "next/link"
import { Fragment } from "react"
import Balancer from "react-wrap-balancer"
import { MONOLOGUE } from "../lib/constants"

const buttons = [
  {
    icon: Github,
    text: '@donaldxdonald',
    link: 'https://github.com/donaldxdonald',
  },
  {
    icon: Mail,
    text: 'donaldxdonald@duck.com',
    link: 'mailto:donaldxdonald@duck.com',
  },
]

const wordMap: Record<number, {route: string}> = {
  21: {
    route: '/blog',
  },
  24: {
    route: '/weekly',
  },
}

export default async function Home() {
  return (
    <div className="z-10 max-w-2xl py-32 flex flex-col justify-center">
      <p
        className="animate-fade-up text-center mb-20 opacity-0 text-3xl md:text-5xl !leading-normal font-light font-display tracking-tighter"
        style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
      >
        <Balancer>
          {
            MONOLOGUE.split(' ')
              .map((word, index) => (
                <Fragment key={word + index}>
                  {
                    wordMap[index]
                      ? <Link className="decoration-purple-300 underline hover:text-slate-500" href={wordMap[index].route}>{word}</Link>
                      : <span> {word} </span>
                  }
                </Fragment>
              ))
          }
        </Balancer>
      </p>
      {
        buttons.map((item, index) => (
          <a
            key={item.link}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="animate-fade-up mx-2 opacity-0 text-base md:text-xl mb-3 flex max-w-fit items-center font-display text-purple-900 justify-center space-x-2 overflow-hidden rounded-md px-4 py-2 transition-colors hover:bg-purple-200/70"
            style={{ animationDelay: `${0.7 + index * 0.2}s`, animationFillMode: "forwards" }}
          >
            <item.icon className="w-5 h-5" />
            <span>
              {item.text}
            </span>
          </a>))
      }
    </div>
  )
}
