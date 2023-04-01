import type { ReactNode } from 'react'

import { Container } from '../container'
import styles from './styles.module.css'

export function NormalHero({ children }: { children: ReactNode }) {
  return (
    <div className={styles.normalHeroWrapper}>
      <Container>{children}</Container>
    </div>
  )
}
