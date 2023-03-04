import { Container } from '../container'
import { Gradient } from '../gradient'
import { Heading } from '../heading'
import { FormulaCard } from './formula-card'
import styles from './styles.module.css'

export interface Formula {
  theme: 'light' | 'dark'
  title: string
  description: string
  button: {
    label: string
    link: string
  }
}

const formulasData: Formula[] = [
  {
    theme: 'dark',
    title: 'Essential',
    description:
      'Simplicité, rapidité, efficacité, la formule pensée pour les entreprises qui recrutent un ouvrier, un technicien ou un profil support.',
    button: {
      label: 'En savoir plus',
      link: 'https://www.google.com'
    }
  },
  {
    theme: 'light',
    title: 'Search',
    description:
      'Expertise, rigueur et méthode, la formule pensée pour les entreprises qui recrutent un cadre, un expert ou un middle manager.',
    button: {
      label: 'En savoir plus',
      link: 'https://www.google.com'
    }
  }
]

export function FormulasSection() {
  return (
    <div className={styles.formulaSectionWrapper}>
      <Gradient />
      <Container>
        <Heading color="light" className={styles.formulaSectionHeading}>
          2 formules qui s&apos;adaptent à votre besoin
        </Heading>
        <div className={styles.formulaSectionContent}>
          {formulasData.map((f, i) => (
            <FormulaCard key={i} {...f} />
          ))}
        </div>
      </Container>
    </div>
  )
}
