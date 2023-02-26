import Image from 'next/image'

import { Container } from '../container'
import { Heading } from '../heading'
import hero from './assets/hero.png'
import styles from './styles.module.css'

export function MainHero() {
  return (
    <div className={styles.mainHeroWrapper}>
      <Container className={styles.container}>
        <div className={styles.headingWrapper}>
          <Heading color="light" as="h1">
            Ensemble, recrutons les talents de la transformation durable
          </Heading>
          <Heading color="light" as="h3">
            Brawo Impact, l&apos;agence de recrutement spécialisée dans les nouveaux métiers de la
            décarbonation.
          </Heading>
        </div>
      </Container>
      <Image
        src={hero}
        alt="hero"
        placeholder="blur"
        fill
        className={styles.heroImage}
        quality={100}
        priority
      />
    </div>
  )
}
