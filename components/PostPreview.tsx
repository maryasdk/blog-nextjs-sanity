import CoverImage from 'components/CoverImage'
import PostDate from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

import AuthorAvatar from './AuthorAvatar'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="flex flex-row mb-4 content-center">
        <div className="mr-4 text-lg text-gray-500">
          <PostDate dateString={date} />
        </div>
        {author && <AuthorAvatar picture={author.picture} size={24} />}
      </div>
      {excerpt && <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>}
    </div>
  )
}
