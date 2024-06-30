import { urlForImage } from 'lib/sanity.image'
import type { Author } from 'lib/sanity.queries'
import Image from 'next/image'

export default function AuthorAvatar(props: Author & { size?: number }) {
  const { name, picture, size = 96  } = props
  return (
    <div className="flex items-center">
      <div className="relative mr-4" style={{ height: size, width: size }}>
        <Image
          src={
            picture?.asset?._ref
              ? urlForImage(picture).height(size).width(size).fit('crop').url()
              : 'https://source.unsplash.com/96x96/?face'
          }
          className="rounded-full"
          height={size}
          width={size}
          alt={picture?.alt ?? name}
        />
      </div>
      {name && <div className="text-xl font-bold">{name}</div>}
    </div>
  )
}
