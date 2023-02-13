import { FifthIcon } from './assets/fifth-icon'
import { FirstIcon } from './assets/first-icon'
import { FourthIcon } from './assets/fourth-icon'
import { SecondIcon } from './assets/second-icon'
import { ThirdIcon } from './assets/third-icon'
import { DomainCard } from './domain-card'
import { SectionHeading, SectionList, SectionWrapper } from './style'

export interface Domain {
  icon: JSX.Element
  title: string
  description: string
}

const domainsData: Domain[] = [
  {
    icon: <FirstIcon />,
    title: 'Energies Renouvelables',
    description: 'Photovoltaïque Eolien Hydraulique Hydrogène Biomasse'
  },
  {
    icon: <SecondIcon />,
    title: 'Economie Circulaire',
    description:
      'Recyclage Achat durable Eco Conception Ecologie industrielle Réparation & Réemploi'
  },
  {
    icon: <ThirdIcon />,
    title: 'Bâtiments durables',
    description: 'Isolation Bureaux études Construction Géothermie'
  },
  {
    icon: <FourthIcon />,
    title: 'Business Impact',
    description: 'Project Management Analyse & Finance Sales, Digital Impact Marketing'
  },
  {
    icon: <FifthIcon />,
    title: 'Economie Sociale & Solidaire',
    description: "Association Fondation Coopérative Société d'utilité sociale"
  }
]

export function DomainsSection() {
  return (
    <SectionWrapper>
      <SectionHeading>Domaines d&apos;expertise</SectionHeading>
      <SectionList>
        {domainsData.map((d, i) => (
          <DomainCard key={i} {...d} />
        ))}
      </SectionList>
    </SectionWrapper>
  )
}
