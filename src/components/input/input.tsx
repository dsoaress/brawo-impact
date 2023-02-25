import cn from 'classnames'
import type { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'

import { Text } from '../text'
import styles from './styles.module.css'

type InputProps = {
  label: string
  error?: string
  required?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, error, required, ...props }, ref) => {
    return (
      <div className={styles.inputWrapper}>
        <label className={styles.label} htmlFor={id}>
          {label}
          {required && <Text color="critical">*</Text>}
        </label>
        <input className={cn(styles.input, { [styles.inputError]: error })} {...props} ref={ref} />
        <div className={styles.errorWrapper}>
          {error && (
            <Text size="xxs" color="critical">
              {error}
            </Text>
          )}
        </div>
      </div>
    )
  }
)

Input.displayName = 'Input'
