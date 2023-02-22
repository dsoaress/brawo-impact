import cn from 'classnames'
import type { HTMLAttributes } from 'react'

import styles from './styles.module.css'

type ButtonProps = HTMLAttributes<HTMLButtonElement>

export function Button({ className, ...props }: ButtonProps) {
  return <button className={cn(styles.main, className)} {...props} />
}
