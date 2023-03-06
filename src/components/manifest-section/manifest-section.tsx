import Image from 'next/image'
import Link from 'next/link'

import { Button } from '../button'
import { Container } from '../container'
import { Heading } from '../heading'
import { Text } from '../text'
import icon from './assets/icon.png'
import styles from './styles.module.css'

export function ManifestSection() {
  return (
    <div className={styles.manifestWrapper}>
      <div className={styles.manifestImage}>
        <Image alt="Manifeste" src={icon} />
      </div>
      <Container>
        <div className={styles.manifestContent}>
          <Heading color="accent">Manifeste</Heading>
          <Text as="p" className={styles.text}>
            Parce que la transition durable nous oblige à repenser les métiers et les compétences,
            Brawo Impact s’engage aux côtés des entreprises pour les aider à recruter les talents
            d&apos;aujourd&apos;hui et de demain.
          </Text>
          <Link href="/manifeste" style={{ zIndex: 10 }}>
            <Button>Lire notre manifeste</Button>
          </Link>
        </div>
      </Container>
    </div>
  )
}
