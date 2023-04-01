import Image from 'next/image'

import { Container } from '../container'
import { Heading } from '../heading'
import hero from './assets/hero.png'
import styles from './styles.module.css'

export function MainHero() {
  return (
    <div className={styles.heroWrapper}>
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
      <video autoPlay loop muted playsInline className={styles.heroVideo}>
        <source src="/hero.mp4" type="video/mp4" />
        <source src="/hero.webm" type="video/webm" />
      </video>
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
