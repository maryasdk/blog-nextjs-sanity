import { PropsWithChildren } from 'react'

export default function PostTitle({ children }: PropsWithChildren) {
  return (
    <h1 className="mb-12 text-center text-5xl font-bold leading-tight tracking-tighter md:text-left md:text-6xl md:leading-none lg:text-7xl">
      {children}
    </h1>
  )
}
