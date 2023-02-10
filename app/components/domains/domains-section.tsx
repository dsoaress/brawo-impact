import { DomainCard } from './domain-card'

export interface Domain {
  icon: string
  title: string
  description: string
}

const domainsData: Domain[] = [
  {
    icon: 'icon',
    title: 'Energies Renouvelables',
    description: 'Photovoltaïque Eolien Hydraulique Hydrogène Biomasse'
  },
  {
    icon: 'icon',
    title: 'Economie Circulaire',
    description:
      'Recyclage Achat durable Eco Conception Ecologie industrielle Réparation & Réemploi'
  },
  {
    icon: 'icon',
    title: 'Bâtiments durables',
    description: 'Isolation Bureaux études Construction Géothermie'
  },
  {
    icon: 'icon',
    title: 'Business Impact',
    description: 'Project Management Analyse & Finance Sales, Digital Impact Marketing'
  },
  {
    icon: 'icon',
    title: 'Economie Sociale & Solidaire',
    description: "Association Fondation Coopérative Société d'utilité sociale"
  }
]

export function DomainsSection() {
  return (
    <div>
      <h2>Domaines d&apos;expertise</h2>
      {domainsData.map((d, i) => (
        <DomainCard key={i} {...d} />
      ))}
    </div>
  )
}
