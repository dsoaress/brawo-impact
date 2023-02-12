import Image from 'next/image'
import Link from 'next/link'

import { formatDate } from '../../utils/format-date'

interface News {
  id: string
  title: string
  slug: string
  cover: {
    alt: string
    url: string
    blurhash: string
    width: number
    height: number
  }
  publishedAt: string
}

export function NewsCard({ cover, publishedAt, title, slug }: News) {
  return (
    <Link href={`/actualites/${slug}`}>
      <Image
        alt={cover.alt}
        src={cover.url}
        width={cover.width}
        height={cover.height}
        blurDataURL={cover.blurhash}
        placeholder="blur"
      />
      <h3>{title}</h3>
      <p>{formatDate(publishedAt)}</p>
    </Link>
  )
}
