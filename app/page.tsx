import { MONOLOGUE } from "@/lib/constants"
import { Github, Mail } from "lucide-react"
import Balancer from "react-wrap-balancer"

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

export default async function Home() {
  return (
    <div className="z-10 w-full max-w-2xl px-5 xl:px-0">
      <p
        className="animate-fade-up text-center mb-20 opacity-0 text-5xl !leading-normal font-light font-display tracking-tighter"
        style={{ animationDelay: "1s", animationFillMode: "forwards" }}
      >
        <Balancer>{ MONOLOGUE }</Balancer>
      </p>
      {
        buttons.map((item, index) => (
          <a
            key={item.link}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="animate-fade-up mx-10 opacity-0 mb-3 flex max-w-fit items-center font-display text-purple-900 justify-center space-x-2 overflow-hidden rounded-md px-4 py-2 transition-colors hover:bg-purple-100"
            style={{ animationDelay: `${1.2 + index * 0.3}s`, animationFillMode: "forwards" }}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-xl">
              {item.text}
            </span>
          </a>))
      }
    </div>
  )
}
