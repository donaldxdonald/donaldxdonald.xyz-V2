import { writeFile } from 'fs/promises'
import { join } from 'path'
import { Author, Feed, FeedOptions, Item } from 'feed'
import { remark } from 'remark'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'
import remarkMdx from 'remark-mdx'
import { read } from 'to-vfile'
import { matter } from 'vfile-matter'
import { fdir } from 'fdir'
import type { Plugin } from 'unified'

export const customFrontMatterPlugin: Plugin = () => {
  return (_, file) => {
    matter(file)
  }
}

async function parseMd(mdPath: string) {
  return remark()
    .use(remarkFrontmatter, ['yaml'])
    .use(remarkGfm)
    .use(remarkMdx)
    .use(remarkHtml)
    .use(customFrontMatterPlugin)
    .processSync(await read(mdPath, {
      encoding: 'utf-8',
    }))
}

const DOMAIN = 'https://donaldxdonald.xyz'

const AUTHOR: Author = {
  name: 'Donald Mok',
  email: 'mzhlovefama@hotmail.com',
  link: 'https://donaldxdonald.xyz/',
}

const COPY_RIGHT = 'CC BY-NC-SA 4.0 2023 © Donald Mok'

const contentCrawler = new fdir({
  includeBasePath: true,
}).glob('**/*.{md,mdx}')

async function buildBlogRSS() {
  const files = await contentCrawler.crawl(join(__dirname, '../content/blog')).withPromise()
  console.log('files', files)
  const options: FeedOptions = {
    copyright: COPY_RIGHT,
    title: 'Donald x Blog',
    id: 'https://donaldxdonald.xyz/blog',
    link: 'https://donaldxdonald.xyz/blog',
    description: `It's all about Donald Mok's Blog`,
  }

  const posts: Item[] = (await Promise.all(
    files
      .map(async filePath => {
        const vFile = await parseMd(filePath)

        const { title = '', date = Date.now() } = vFile.data.matter as Record<string, string>

        const html = vFile.toString('utf-8')
        return {
          title,
          date: new Date(date),
          author: [AUTHOR],
          content: html,
          link: DOMAIN + extractLinkFromPath(filePath),
        } as Item
      }),
  )).filter(Boolean)

  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date))

  await writeFeed('blog', posts, options)
}

async function buildWeeklyRSS() {
  const files = await contentCrawler.crawl(join(__dirname, '../content/weekly')).withPromise()

  const options: FeedOptions = {
    copyright: COPY_RIGHT,
    title: 'Donald x Weekly',
    id: 'https://donaldxdonald.xyz/weekly',
    link: 'https://donaldxdonald.xyz/weekly',
    description: `What a Donald Mok's week!`,
  }

  const posts: Item[] = (await Promise.all(
    files
      .map(async filePath => {
        const vFile = await parseMd(filePath)

        const { title = '', date = Date.now() } = vFile.data.matter as Record<string, string>

        return {
          title,
          date: new Date(date),
          author: [AUTHOR],
          content: vFile.toString('utf-8'),
          link: DOMAIN + extractLinkFromPath(filePath),
        } as Item
      }),
  )).filter(Boolean)

  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date))

  await writeFeed('weekly', posts, options)
}

async function writeFeed(name: string, items: Item[], options: FeedOptions) {
  options.author = AUTHOR
  options.feedLinks = {
    json: `https://donaldxdonald.xyz/${name}.json`,
    atom: `https://donaldxdonald.xyz/${name}.atom`,
    rss: `https://donaldxdonald.xyz/${name}.xml`,
  }

  const feed = new Feed(options)

  items.forEach(item => feed.addItem(item))

  await writeFile(join(__dirname, `../public/${name}.xml`), feed.rss2(), 'utf-8')
  await writeFile(join(__dirname, `../public/${name}.atom`), feed.atom1(), 'utf-8')
  await writeFile(join(__dirname, `../public/${name}.json`), feed.json1(), 'utf-8')
  console.log(`--------------        RSS for ${name}: DONE        ----------------`)
}

async function main() {
  await buildBlogRSS()
  await buildWeeklyRSS()
}

function extractLinkFromPath(path: string) {
  return path
    .toLowerCase()
    .replace(/.*?content(.*?)\.md(x?)/, '$1')
}

main()
