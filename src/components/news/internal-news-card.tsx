import { formatDate } from '../../utils/format-date'
import {
  InternalCardButton,
  InternalCardContent,
  InternalCardCover,
  InternalCardDescription,
  InternalCardLink,
  InternalCardTitle,
  InternalCardWrapper,
  InternalCtaWrapper,
  InternalDateWrapper
} from './style'

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
    <InternalCardWrapper>
      <InternalCardLink href={`/actualites/${slug}`} aria-label={title}>
        <InternalCardCover
          alt={cover.alt}
          src={cover.url}
          width={cover.width}
          height={cover.height}
          blurDataURL={cover.blurhash}
          placeholder="blur"
        />
        <InternalCardContent>
          <InternalCardTitle>{title}</InternalCardTitle>
          <InternalDateWrapper color="accent" weight="bold">
            {formatDate(publishedAt, 'short')}
          </InternalDateWrapper>
          <InternalCardDescription>{excerpt}</InternalCardDescription>
          <InternalCtaWrapper>
            <InternalCardButton>En savoir plus</InternalCardButton>
          </InternalCtaWrapper>
        </InternalCardContent>
      </InternalCardLink>
    </InternalCardWrapper>
  )
}
