import { constants } from '../../config/constants'
import { getNewsService } from '../../services/get-news'
import { Container } from '../container'
import { Heading } from '../heading'
import { InternalNewsCard } from './internal-news-card'
import { Pagination } from './pagination'
import styles from './styles.module.css'

export async function InternalNewsSection({ page = 1 }: { page: number }) {
  const newsData = await getNewsService({ limit: constants.NEWS_LIMIT, page })
  return (
    <Container>
      <div className={styles.internalSectionWrapper}>
        <Heading className={styles.internalSectionHeading}>Actualités</Heading>
        <Heading className={styles.internalSectionSubHeading} as="h2">
          Lorem ipsum dolor sit amet consectetur.
        </Heading>
        <div className={styles.internalSectionList}>
          {newsData.docs.map((n, i) => (
            <InternalNewsCard key={i} {...n} />
          ))}
        </div>

        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Pagination currentPage={newsData.page} />
      </div>
    </Container>
  )
}
