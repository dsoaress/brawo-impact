import { formatDate } from '../../utils/format-date'
import { Text } from '../text'
import { CardCover, CardLink, CardWrapper, DateWrapper } from './style'

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
    <CardWrapper>
      <CardLink href={`/actualites/${slug}`} aria-label={title}>
        <CardCover
          alt={cover.alt}
          src={cover.url}
          width={cover.width}
          height={cover.height}
          blurDataURL={cover.blurhash}
          placeholder="blur"
        />
        <DateWrapper>
          <Text color="accent" weight="normal" size="xs" font="varelaRound">
            {formatDate(publishedAt)}
          </Text>
        </DateWrapper>
        <Text weight="semibold" size="md" font="quicksand">
          {title}
        </Text>
      </CardLink>
    </CardWrapper>
  )
}
