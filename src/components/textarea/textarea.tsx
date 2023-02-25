import cn from 'classnames'
import type { TextareaHTMLAttributes } from 'react'
import { forwardRef } from 'react'

import { Text } from '../text'
import styles from './styles.module.css'

type TextareaProps = {
  label: string
  error?: string
  required?: boolean
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, id, error, required, ...props }, ref) => {
    return (
      <div className={styles.textareaWrapper}>
        <label className={styles.label} htmlFor={id}>
          {label}
          {required && <Text color="critical">*</Text>}
        </label>
        <textarea
          className={cn(styles.textarea, { [styles.textareaError]: error })}
          {...props}
          ref={ref}
        />
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

Textarea.displayName = 'Textarea'
