import PostList from '@/components/layout/post-list'
import { getWeeklies } from '../../source'

export default function BlogPage() {
  const allPosts = getWeeklies()
  return (
    <>
      <div className="mt-6 md:mt-16 pt-5 -mb-10 px-4">
        <h2 className="font-serif text-5xl font-bold">NAVI</h2>
        <p className="mt-3 pt-2 border-t border-purple-400 font-mono text-gray-400 ">About Web Tech & AI, Weekly</p>
      </div>
      <PostList list={allPosts}></PostList>
    </>
  )
}
