import { constants } from '../../config/constants'
import { getNewsService } from '../../services/get-news'
import { InternalNewsCard } from './internal-news-card'
import { Pagination } from './pagination'
import {
  InternalSectionHeading,
  InternalSectionList,
  InternalSectionSubHeading,
  InternalSectionWrapper
} from './style'

export async function InternalNewsSection({ page = 1 }: { page: number }) {
  const newsData = await getNewsService({ limit: constants.NEWS_LIMIT, page })
  return (
    <InternalSectionWrapper>
      <InternalSectionHeading css={{ textTransform: 'uppercase' }}>
        Actualités
      </InternalSectionHeading>
      <InternalSectionSubHeading as="h2">
        Lorem ipsum dolor sit amet consectetur.
      </InternalSectionSubHeading>
      <InternalSectionList>
        {newsData.docs.map((n, i) => (
          <InternalNewsCard key={i} {...n} />
        ))}
      </InternalSectionList>

      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <Pagination currentPage={newsData.page} />
    </InternalSectionWrapper>
  )
}
