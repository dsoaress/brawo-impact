import cn from 'classnames'
import type { ReactNode } from 'react'

import styles from './styles.module.css'

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn(styles.container, className)}>{children}</div>
}
