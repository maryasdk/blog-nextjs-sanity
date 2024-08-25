import AuthorAvatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import PostDate from 'components/PostDate'
import PostTitle from 'components/PostTitle'
import type { Post } from 'lib/sanity.queries'

export default function PostHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'author'> & {
    slug?: string
  },
) {
  const { title, coverImage, date, author, slug } = props
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-12 md:block">
        {author && (
          <AuthorAvatar name={author.name} picture={author.picture} size={56} />
        )}
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} image={coverImage} priority slug={slug} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
          {author && (
            <AuthorAvatar
              name={author.name}
              picture={author.picture}
              size={56}
            />
          )}
        </div>
        <div className="mb-6 text-lg">
          <PostDate dateString={date} />
        </div>
      </div>
    </>
  )
}
