import PostList from '@/components/layout/post-list'
import { getBlogs } from '../../source'

export default function BlogPage() {
  const allPosts = getBlogs()

  return (
    <PostList list={allPosts}></PostList>
  )
}
