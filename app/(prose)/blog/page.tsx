import PostList from '@/components/layout/post-list'
import { getBlogs } from '../../source'

export default function BlogPage() {
  const allPosts = getBlogs().map(v => {
    const { data, ...rest } = v
    return {
      ...rest,
      data: {
        title: data.title,
        date: data.date,
      },
    }
  })

  return (
    <PostList list={allPosts as any}></PostList>
  )
}
