import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import BlogLayout from 'components/BlogLayout'
import IndexPageHead from 'components/IndexPageHead'
import MoreStories from 'components/Stories'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'

import { Footer } from './Footer'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props
  const {
    title = demo.title,
    introTitle = demo.introTitle,
    introContent = demo.introContent,
    subheader = demo.subheader,
  } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />

      <BlogLayout preview={preview} loading={loading}>
        <Container>
          <BlogHeader title={title} subheader={subheader} level={1} />
          <section className="my-20">
            <h2 className="text-2xl font-bold">{introTitle}</h2>
            <br />
            <p>{introContent}</p>
          </section>
          {posts.length > 0 && <MoreStories posts={posts} />}
        </Container>
        <Footer />
      </BlogLayout>
    </>
  )
}
