import { Container } from '../container'
import { Heading } from '../heading'
import { FifthIcon } from './assets/fifth-icon'
import { FirstIcon } from './assets/first-icon'
import { FourthIcon } from './assets/fourth-icon'
import { SecondIcon } from './assets/second-icon'
import { ThirdIcon } from './assets/third-icon'
import { DomainCard } from './domain-card'
import styles from './styles.module.css'

export interface Domain {
  icon: JSX.Element
  title: string
  description: string
}

const domainsData: Domain[] = [
  {
    icon: <FirstIcon />,
    title: 'Energies Renouvelables',
    description: 'Photovoltaïque<br />Eolien<br />Hydraulique<br />Hydrogène<br />Biomasse'
  },
  {
    icon: <SecondIcon />,
    title: 'Economie Circulaire',
    description:
      'Recyclage<br />Achat durable<br />Eco Conception<br />Ecologie industrielle<br />Réparation & Réemploi'
  },
  {
    icon: <ThirdIcon />,
    title: 'Bâtiments durables',
    description: 'Isolation<br />Bureaux études<br />Construction<br />Géothermie'
  },
  {
    icon: <FourthIcon />,
    title: 'Business Impact',
    description:
      'Project Management<br />Analyse & Finance<br />Sales, Digital<br />Impact Marketing'
  },
  {
    icon: <FifthIcon />,
    title: 'Economie Sociale & Solidaire',
    description: "Association<br />Fondation<br />Coopérative<br />Société d'utilité sociale"
  }
]

export function DomainsSection() {
  return (
    <div className={styles.sectionWrapper}>
      <Container>
        <Heading className={styles.sectionHeading}>Domaines d&apos;expertise</Heading>
        <div className={styles.sectionList}>
          {domainsData.map((d, i) => (
            <DomainCard key={i} {...d} />
          ))}
        </div>
      </Container>
    </div>
  )
}
