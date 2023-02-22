import cn from 'classnames'
import Link from 'next/link'

import { constants } from '../../config/constants'
import { getNewsService } from '../../services/get-news'
import { Text } from '../text'
import styles from './styles.module.css'

interface PaginationProps {
  currentPage: number
}

export async function Pagination({ currentPage }: PaginationProps) {
  const newsData = await getNewsService({ limit: constants.NEWS_LIMIT })
  return (
    <ul className={styles.paginationWrapper}>
      {Array.from({ length: newsData.totalPages }, (_, i) => (
        <Link
          className={styles.paginationLink}
          key={i}
          href={`/actualites/page/${i + 1}`}
          aria-label={`Page ${i + 1}`}
        >
          <li
            className={cn(styles.paginationItem, {
              [styles.paginationItemActive]: currentPage === i + 1
            })}
          >
            <Text color={currentPage === i + 1 ? 'light' : 'accent'}>{i + 1}</Text>
          </li>
        </Link>
      ))}
    </ul>
  )
}
