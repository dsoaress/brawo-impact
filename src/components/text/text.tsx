import cn from 'classnames'
import type { HTMLAttributes } from 'react'

import styles from './styles.module.css'

type TextProps = {
  as?: 'span' | 'p'
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  font?: 'raleway' | 'quicksand' | 'varelaRound'
  color?: 'accent' | 'dark' | 'light' | 'critical'
} & HTMLAttributes<HTMLSpanElement | HTMLParagraphElement>

export function Text({
  as: Tag = 'span',
  color = 'dark',
  font = 'quicksand',
  size = 'sm',
  weight = 'medium',
  className,
  ...props
}: TextProps) {
  return (
    <Tag
      className={cn(styles[color], styles[font], styles[size], styles[weight], className)}
      {...props}
    />
  )
}
