import { Heading } from '../heading'
import { Text } from '../text'
import { Check } from './assets/check'
import { NoCheck } from './assets/no-check'
import type { FormulasDescription } from './formulas-description'
import styles from './styles.module.css'

export function FormulasDescriptionCard({
  description,
  list,
  theme,
  title,
  footer
}: FormulasDescription) {
  return (
    <div className={styles.formulasDescriptionCardWrapper}>
      <Heading
        as="h3"
        color={theme === 'accent' ? 'accent' : 'dark'}
        style={{ textTransform: 'uppercase', marginBottom: '1rem' }}
      >
        {title}
      </Heading>
      <Text weight="medium" size="md">
        {description}
      </Text>
      <hr className={styles.formulaCardWrapperHr} />
      <div className={styles.formulasDescriptionCardList}>
        {list.map(item => (
          <div className={styles.formulasDescriptionCardListItem} key={item.title}>
            {item.checked ? <Check /> : <NoCheck />}
            <Text size="md" weight="bold">
              {item.title}
            </Text>
          </div>
        ))}
        <Text
          weight="bold"
          size="md"
          color={theme === 'accent' ? 'accent' : 'dark'}
          style={{ textAlign: 'center', marginTop: '24px' }}
        >
          {footer}
        </Text>
      </div>
    </div>
  )
}
