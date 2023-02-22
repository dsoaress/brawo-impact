import Image from 'next/image'
import Link from 'next/link'

import { formatDate } from '../../utils/format-date'
import { Button } from '../button'
import { Heading } from '../heading'
import { Text } from '../text'
import styles from './styles.module.css'

interface News {
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
  excerpt: string
}

export function InternalNewsCard({ cover, excerpt, publishedAt, slug, title }: News) {
  return (
    <div className={styles.internalCardWrapper}>
      <Link className={styles.internalCardLink} href={`/actualites/${slug}`} aria-label={title}>
        <Image
          alt={cover.alt}
          src={cover.url}
          width={cover.width}
          height={cover.height}
          blurDataURL={cover.blurhash}
          placeholder="blur"
          className={styles.internalCardCover}
        />
        <div className={styles.internalCardContent}>
          <Heading className={styles.internalCardTitle}>{title}</Heading>
          <Text color="accent" weight="bold">
            {formatDate(publishedAt, 'short')}
          </Text>
          <Text>{excerpt}</Text>
          <div>
            <Button>En savoir plus</Button>
          </div>
        </div>
      </Link>
    </div>
  )
}
