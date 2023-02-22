import { Heading } from '../heading'
import { Text } from '../text'
import type { Domain } from './domains-section'
import styles from './styles.module.css'

export function DomainCard({ description, icon, title }: Domain) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.iconWrapper}>
        {icon}
        <Heading as="h3" color="accent" className={styles.heading}>
          {title}
        </Heading>
      </div>
      <Text font="quicksand" weight="medium" size="xs">
        {description}
      </Text>
    </div>
  )
}
