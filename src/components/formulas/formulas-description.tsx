import { Container } from '../container'
import { Heading } from '../heading'
import { FormulasDescriptionCard } from './formulas-description-card'

export interface FormulasDescription {
  theme: 'accent' | 'dark'
  title: string
  description: string
  list: {
    title: string
    checked: boolean
  }[]
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
      { title: 'Contrôle de réferences', checked: false },
      { title: 'Tests de compéténces', checked: false },
      { title: 'Shortlist', checked: true },
      { title: 'Aide à la décision', checked: true },
      { title: 'Onboarding & Suivi', checked: true },
      { title: 'Progresst report', checked: false }
    ]
  },
  {
    theme: 'accent',
    title: 'Search',
    description:
      'Expertise, rigueur et méthode, la formule pensée pour les entreprises qui recrutent un cadre, un expert ou un middle manager.',
    list: [
      { title: 'Prise de brief', checked: true },
      { title: 'Sourcing', checked: true },
      { title: 'Engagement & Qualification', checked: true },
      { title: 'Entretien', checked: true },
      { title: 'Contrôle de réferences', checked: true },
      { title: 'Tests de compéténces', checked: true },
      { title: 'Shortlist', checked: true },
      { title: 'Aide à la décision', checked: true },
      { title: 'Onboarding & Suivi', checked: true },
      { title: 'Progresst report', checked: true }
    ]
  }
]

export function FormulasDescription() {
  return (
    <Container>
      <Heading color="accent">2 formules qui s&apos;adaptent à votre besoin</Heading>
      {formulasDescriptionData.map((f, i) => (
        <FormulasDescriptionCard key={i} {...f} />
      ))}
    </Container>
  )
}
