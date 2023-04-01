import { Container } from '../container'
import { Heading } from '../heading'
import { FormulasDescriptionCard } from './formulas-description-card'
import styles from './styles.module.css'

export interface FormulasDescription {
  theme: 'accent' | 'dark'
  title: string
  description: string
  list: {
    title: string
    checked: boolean
  }[]
  footer: string
}

const formulasDescriptionData: FormulasDescription[] = [
  {
    theme: 'accent',
    title: 'Essential',
    description:
      'Simplicité, rapidité, efficacité, la formule pensée pour les entreprises qui recrutent un ouvrier, un technicien ou un profil support.',
    list: [
      { title: 'Prise de brief', checked: true },
      { title: 'Sourcing', checked: true },
      { title: 'Engagement & Qualification', checked: true },
      { title: 'Entretien', checked: true },
      { title: 'Test Green Skills', checked: true },
      { title: 'Test Soft Skills', checked: false },
      { title: 'Shortlist', checked: true },
      { title: 'Contrôle de références', checked: false },
      { title: 'Aide à la décision', checked: true },
      { title: 'Onboarding & suivi', checked: true },
      { title: 'Progress report', checked: false }
    ],
    footer: '15% de la rémuneration annuelle brute'
  },
  {
    theme: 'dark',
    title: 'Search',
    description:
      'Expertise, rigueur et méthode, la formule pensée pour les entreprises qui recrutent un cadre, un expert ou un middle manager.',
    list: [
      { title: 'Prise de brief', checked: true },
      { title: 'Sourcing', checked: true },
      { title: 'Engagement & Qualification', checked: true },
      { title: 'Entretien', checked: true },
      { title: 'Test Green Skills', checked: true },
      { title: 'Test Soft Skills', checked: true },
      { title: 'Shortlist', checked: true },
      { title: 'Contrôle de références', checked: true },
      { title: 'Aide à la décision', checked: true },
      { title: 'Onboarding & suivi', checked: true },
      { title: 'Progress report', checked: true }
    ],
    footer: '18% de la rémuneration annuelle brute'
  }
]

export function FormulasDescription() {
  return (
    <Container className={styles.formulasDescriptionCardsContainer}>
      <Heading style={{ textAlign: 'center', marginBottom: 32 }} color="accent">
        2 formules qui s&apos;adaptent à votre besoin
      </Heading>
      <div className={styles.formulasDescriptionCardsWrapper}>
        {formulasDescriptionData.map((f, i) => (
          <FormulasDescriptionCard key={i} {...f} />
        ))}
      </div>
    </Container>
  )
}
