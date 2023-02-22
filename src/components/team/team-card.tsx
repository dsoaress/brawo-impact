import Image from 'next/image'

import { Heading } from '../heading'
import { Text } from '../text'
import styles from './styles.module.css'

interface Team {
  name: string
  role: string
  image: {
    url: string
    alt: string
    width: number
    height: number
    blurhash: string
  }
}

export function TeamCard({ image, name, role }: Team) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContent}>
        <Image
          alt={image.alt}
          src={image.url}
          width={image.width}
          height={image.height}
          blurDataURL={image.blurhash}
          placeholder="blur"
          className={styles.avatar}
        />
        <Heading className={styles.cardHeading} as="h3" color="accent">
          {name}
        </Heading>
        <Text className={styles.cardText} font="raleway" weight="semibold">
          {role}
        </Text>
      </div>
    </div>
  )
}
