import { FormulaCard } from './formula-card'

export interface Formula {
  title: string
  description: string
  button: {
    label: string
    link: string
  }
}

const formulasData: Formula[] = [
  {
    title: 'Essential',
    description:
      'Simplicité, rapidité, efficacité, la formule pensée pour les entreprises qui recrutent un ouvrier, un technicien ou un profil support.',
    button: {
      label: 'En savoir plus',
      link: 'https://www.google.com'
    }
  },
  {
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
    <div>
      <h2>2 formules qui s&apos;adaptent à votre besoin</h2>
      {formulasData.map((f, i) => (
        <FormulaCard key={i} {...f} />
      ))}
    </div>
  )
}
