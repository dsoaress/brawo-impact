import cn from 'classnames'
import type { HTMLAttributes } from 'react'

import styles from './styles.module.css'

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  color?: 'accent' | 'dark' | 'light'
} & HTMLAttributes<HTMLHeadingElement>

export function Heading({ as: Tag = 'h2', color = 'dark', className, ...props }: HeadingProps) {
  return <Tag className={cn(styles.main, styles[Tag], styles[color], className)} {...props} />
}
