import cn from 'classnames'

import { Heading } from '../heading'
import { Text } from '../text'
import type { Formula } from './formulas-section'
import styles from './styles.module.css'

export function FormulaCard({ title, description, theme }: Formula) {
  return (
    <div
      className={cn(styles.formulaCardWrapper, {
        [styles.formulaCardWrapperDark]: theme === 'dark',
        [styles.formulaCardWrapperLight]: theme === 'light'
      })}
    >
      <Heading
        as="h3"
        color={theme === 'dark' ? 'light' : 'dark'}
        className={styles.formulaCardWrapperHeading}
      >
        {title}
      </Heading>
      <hr className={styles.formulaCardWrapperHr} />
      <Text color={theme === 'dark' ? 'light' : 'dark'} className={styles.formulaCardWrapperText}>
        {description}
      </Text>
      {/* <button>{button.label}</button> */}
    </div>
  )
}
