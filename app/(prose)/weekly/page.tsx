import PostList from '@/components/layout/post-list'
import { allWeeklies } from 'contentlayer/generated'

export default function BlogPage() {
  return (
    <PostList list={allWeeklies}></PostList>
  )
}
