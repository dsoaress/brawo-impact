import { Heading } from '../heading'
import { Text } from '../text'
import type { AccelerateCard } from './accelerate-section'
import styles from './styles.module.css'

export function AccelerateCard({ title, description }: AccelerateCard) {
  return (
    <div className={styles.accelerateCardWrapper}>
      <Heading as="h3" color="accent" className={styles.accelerateCardHeading}>
        {title.firstPart} <span style={{ color: '#50AEE9' }}>{title.secondPart}</span>
      </Heading>
      <Text className={styles.accelerateCardWrapperText}>{description}</Text>
    </div>
  )
}
