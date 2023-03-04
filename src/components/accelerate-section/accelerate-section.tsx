import { Container } from '../container'
import { Heading } from '../heading'
import { Text } from '../text'
import { AccelerateCard } from './accelerate-card'
import styles from './styles.module.css'

export interface AccelerateCard {
  title: {
    firstPart: string
    secondPart: string
  }
  description: string
}

const accelerateCards: AccelerateCard[] = [
  {
    title: {
      firstPart: 'Expérience',
      secondPart: 'simplifiée'
    },
    description:
      "Nous simplifions l'expérience des entreprises qui recrutent et des candidats à la recherche d'un emploi."
  },
  {
    title: {
      firstPart: 'Methode',
      secondPart: 'innovante'
    },
    description:
      "Nous optimisons la recherche, l'engagement et l'évaluation des candidats grâce à nos outils digitaux de dernière génération."
  },
  {
    title: {
      firstPart: 'Organisation',
      secondPart: 'agile'
    },
    description:
      "Nous associons le meilleur de la technologie et de l'humain pour créer une expertise en recrutement unique."
  }
]

export function AccelerateSection() {
  return (
    <div className={styles.accelerateSectionWrapper}>
      <Container>
        <Heading className={styles.accelerateSectionHeading}>
          Accélérez vos recrutements avec Brawo impact
        </Heading>
        <Text as="p" className={styles.accelerateSectionSubHeading}>
          L&apos;agence de recrutement nouvelle génération qui vous aide à recruter les talents de
          la transformation durable
        </Text>
        <div className={styles.accelerateSectionContent}>
          {accelerateCards.map((c, i) => (
            <AccelerateCard key={i} {...c} />
          ))}
        </div>
      </Container>
    </div>
  )
}
