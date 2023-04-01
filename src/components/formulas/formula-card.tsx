import cn from 'classnames'
import Link from 'next/link'

import { Button } from '../button'
import { Heading } from '../heading'
import { Text } from '../text'
import type { Formula } from './formulas-section'
import styles from './styles.module.css'

export function FormulaCard({ title, description, theme, button }: Formula) {
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
      <Text
        as="p"
        color={theme === 'dark' ? 'light' : 'dark'}
        className={styles.formulaCardWrapperText}
      >
        {description}
      </Text>
      {/* <div className={styles.formulaCardButtonWrapper}>
        <Link href={button.link}>
          <Button style={theme === 'light' ? 'secondary' : 'solid'}>{button.label}</Button>
        </Link>
      </div> */}
    </div>
  )
}
