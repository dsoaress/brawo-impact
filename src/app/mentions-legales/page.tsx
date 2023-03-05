import type { Metadata } from 'next/types'

import { AppointmentSection } from '../../components/appointment-section'
import { BasePageLayout } from '../../components/base-page-layout'
import { Header } from '../../components/header'
import { Heading } from '../../components/heading'
import { Text } from '../../components/text'
import hero from './assets/hero.png'
import styles from './styles.module.css'

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <BasePageLayout hero={hero}>
        <Heading color="accent" className={styles.heading}>
          Mentions Légales
        </Heading>
        <Text as="p" className={styles.text}>
          La Société BRAWO, SAS, au capital 12 990 euros, dont le siège social est situé Hélioparc
          Technopôle – 2 Avenue Pierre Angot – CS 8011 – 64053 PAU CEDEX 9, immatriculée au RCS de
          PAU sous le n°904 623 337
        </Text>

        <Text as="p" className={styles.text}>
          Directeur de la Publication: Kaelig SADAUNE, Président Directeur Général
        </Text>

        <Text as="p" className={styles.text}>
          <strong>Hébergement:</strong>
          <br />
          OVH <br />
          RCS Lille Métropole 424 761 419 00045 <br />
          Code APE 2620Z <br />
          N° TVA : FR 22 424 761 419 <br />
          Siège social : 2 rue Kellermann – 59100 Roubaix – France
        </Text>
      </BasePageLayout>
      <AppointmentSection />
    </>
  )
}

export const metadata: Metadata = {
  title: 'Mentions Légales'
}
