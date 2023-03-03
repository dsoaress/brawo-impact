import cn from 'classnames'
import Link from 'next/link'

import { getNewsService } from '../../services/get-news'
import { Button } from '../button'
import { Container } from '../container'
import { Heading } from '../heading'
import { NewsCard } from './news-card'
import styles from './styles.module.css'

interface NewsSectionProps {
  withBackground?: boolean
  withCta?: boolean
  title?: string
}

export async function NewsSection({
  title = 'Actualités de Brawo Impact',
  withBackground = true,
  withCta = true
}: NewsSectionProps) {
  const newsData = await getNewsService()
  return (
    <div
      className={cn(styles.sectionWrapper, {
        [styles.background]: withBackground
      })}
    >
      <Container>
        <Heading className={styles.sectionHeading}>{title}</Heading>
        <div className={styles.sectionList}>
          {newsData.docs.map((n, i) => (
            <NewsCard key={i} {...n} />
          ))}
        </div>

        {withCta && (
          <Link className={styles.ctaLink} href="/actualites/page">
            <Button>Toutes nos actualités</Button>
          </Link>
        )}
      </Container>
    </div>
  )
}
