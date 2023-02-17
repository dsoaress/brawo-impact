import { constants } from '../../config/constants'
import { getNewsService } from '../../services/get-news'
import { Text } from '../text'
import { PaginationItem, PaginationItemLink, PaginationWrapper } from './style'

interface PaginationProps {
  currentPage: number
}

export async function Pagination({ currentPage }: PaginationProps) {
  const newsData = await getNewsService({ limit: constants.NEWS_LIMIT })
  return (
    <PaginationWrapper>
      {Array.from({ length: newsData.totalPages }, (_, i) => (
        <PaginationItemLink key={i} href={`/actualites/page/${i + 1}`} aria-label={`Page ${i + 1}`}>
          <PaginationItem active={currentPage === i + 1}>
            <Text color={currentPage === i + 1 ? 'light' : 'accent'}>{i + 1}</Text>
          </PaginationItem>
        </PaginationItemLink>
      ))}
    </PaginationWrapper>
  )
}
