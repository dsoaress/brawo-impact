import { Container } from '../container'
import { Heading } from '../heading'
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
      <video autoPlay loop muted playsInline src="/hero.webm" className={styles.heroVideo} />
    </div>
  )
}
