import PostList from '@/components/layout/post-list'
import { getWeeklies } from '../../source'

export default function BlogPage() {
  const allPosts = getWeeklies()
  return (
    <PostList list={allPosts}></PostList>
  )
}
