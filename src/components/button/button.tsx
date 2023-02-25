import cn from 'classnames'
import type { HTMLAttributes } from 'react'

import styles from './styles.module.css'

type ButtonProps = {
  style?: 'solid' | 'outline' | 'secondary'
} & HTMLAttributes<HTMLButtonElement>

export function Button({ style = 'solid', className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        styles.main,
        {
          [styles.solid]: style === 'solid',
          [styles.outline]: style === 'outline',
          [styles.secondary]: style === 'secondary'
        },
        className
      )}
      {...props}
    />
  )
}
