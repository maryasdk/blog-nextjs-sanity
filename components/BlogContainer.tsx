import { PropsWithChildren } from 'react'

export default function BlogContainer({ children }: PropsWithChildren) {
  return <div className="container mx-auto px-5">{children}</div>
}
