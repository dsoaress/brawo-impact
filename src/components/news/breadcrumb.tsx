import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'

import { Text } from '../text'
// import type { ReactNode } from 'react'
import styles from './styles.module.css'

// function Item({ children }: { children: ReactNode }) {
//   return <>{children}</>
// }

export function Breadcrumb() {
  return (
    <div className={styles.breadcrumbWrapper}>
      <div className={styles.breadcrumbList}>
        <Link href="/" className={styles.breadcrumbLink}>
          <Text>Home</Text>
        </Link>
        <span className={styles.breadcrumbSeparator}>
          <IoIosArrowForward />
        </span>
        <Link href="/actualites/page/1" className={styles.breadcrumbLink}>
          <Text>Actualités</Text>
        </Link>
        <span className={styles.breadcrumbSeparator}>
          <IoIosArrowForward />
        </span>
        <Text weight="bold" style={{ color: '#50AEE9' }}>
          Article
        </Text>
      </div>
    </div>
  )
}
