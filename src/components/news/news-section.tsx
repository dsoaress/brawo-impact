import Link from 'next/link'

import { getNewsService } from '../../services/get-news'
import { Button } from '../button'
import { Container } from '../container'
import { Heading } from '../heading'
import { NewsCard } from './news-card'
import styles from './styles.module.css'

export async function NewsSection() {
  const newsData = await getNewsService()
  return (
    <div className={styles.sectionWrapper}>
      <Container>
        <Heading className={styles.sectionHeading}>Actualités de Brawo Impact</Heading>
        <div className={styles.sectionList}>
          {newsData.docs.map((n, i) => (
            <NewsCard key={i} {...n} />
          ))}
        </div>

        <Link className={styles.ctaLink} href="/actualites/page">
          <Button>Toutes nos actualités</Button>
        </Link>
      </Container>
    </div>
  )
}
