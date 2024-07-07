import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
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
  const { title = demo.title, subheader = demo.subheader } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader title={title} subheader={subheader} level={1} />
          <section className='my-20'>
            <h2 className='text-2xl font-bold'>Welcome to my Sharing Blog</h2>
            <br/>
            <p>
            Hi, my name is Marya, and I’m, in the briefest of terms, a Software Engineer from Lebanon. I created this blog as a knowledge-sharing space for diverse of topics that I’m either interested in, or have had the chance to extensively research. I do not have one single identity and neither does this blog. I believe in the power of community, sharing, and small acts of kindness. Help me enrich this hub by commenting on the blog posts or by contacting me personally.
            </p>
          </section>
          {posts.length > 0 && <MoreStories posts={posts} />}
        </Container>
        <Footer />
      </Layout>
    </>
  )
}
