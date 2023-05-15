import PostList from '@/components/layout/post-list'
import { allPosts } from 'contentlayer/generated'

export default function BlogPage() {
  return (
    <PostList list={allPosts}></PostList>
  )
}
