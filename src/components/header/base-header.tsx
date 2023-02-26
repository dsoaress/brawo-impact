import type { ReactNode } from 'react'

import { Container } from '../container'
import styles from './styles.module.css'

type BaseHeaderProps = {
  style?: 'solid' | 'transparent'
  children?: ReactNode
}

export function BaseHeader({ style = 'solid', children }: BaseHeaderProps) {
  return (
    <header className={styles[style]}>
      <Container>
        <div className={styles.content}>{children}</div>
      </Container>
    </header>
  )
}
