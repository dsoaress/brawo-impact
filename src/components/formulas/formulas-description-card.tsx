import { Heading } from '../heading'
import { Text } from '../text'
import { Check } from './assets/check'
import { NoCheck } from './assets/no-check'
import type { FormulasDescription } from './formulas-description'
import styles from './styles.module.css'

export function FormulasDescriptionCard({ description, list, theme, title }: FormulasDescription) {
  return (
    <div>
      <Heading>{title}</Heading>
      <Text>{description}</Text>
      <hr className={styles.formulaCardWrapperHr} />
      <div>
        {list.map(item => (
          <div key={item.title}>
            {item.checked ? <Check /> : <NoCheck />}
            <Text size="md" weight="bold">
              {item.title}
            </Text>
          </div>
        ))}
      </div>
    </div>
  )
}
