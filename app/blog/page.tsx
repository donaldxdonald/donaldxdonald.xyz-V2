import { allPosts } from 'contentlayer/generated'
import PostList from '../../components/layout/post-list'

export default function BlogPage() {
  return (
    <PostList list={allPosts}></PostList>
  )
}
