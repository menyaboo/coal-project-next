import type { ReactNode } from 'react'

interface ISocialLinks {
  name: string
  url: string
  svg: ReactNode
}

interface ITelephoneLinks {
  telephone: string
  href: string
}

export type {
  ISocialLinks,
  ITelephoneLinks,
}
