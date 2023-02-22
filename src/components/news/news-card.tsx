import Image from 'next/image'
import Link from 'next/link'

import { formatDate } from '../../utils/format-date'
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
}

export function NewsCard({ cover, publishedAt, title, slug }: News) {
  return (
    <div className={styles.cardWrapper}>
      <Link className={styles.cardLink} href={`/actualites/${slug}`} aria-label={title}>
        <Image
          alt={cover.alt}
          src={cover.url}
          width={cover.width}
          height={cover.height}
          blurDataURL={cover.blurhash}
          placeholder="blur"
          className={styles.cardCover}
        />
        <div className={styles.dateWrapper}>
          <Text color="accent" weight="normal" size="xs" font="varelaRound">
            {formatDate(publishedAt)}
          </Text>
        </div>
        <Text weight="semibold" size="md" font="quicksand">
          {title}
        </Text>
      </Link>
    </div>
  )
}
