import type { Metadata } from 'next/types'

import { AppointmentSection } from '../../components/appointment-section'
import { BasePageLayout } from '../../components/base-page-layout'
import { Header } from '../../components/header'
import { Heading } from '../../components/heading'
import { ManifestVideo } from '../../components/manifest-section'
import { Text } from '../../components/text'
import hero from './assets/hero.png'
import styles from './styles.module.css'

export default function Manifeste() {
  return (
    <>
      <Header />
      <BasePageLayout hero={hero}>
        <Heading color="accent" className={styles.heading}>
          Notre manifeste
        </Heading>

        <ManifestVideo />

        <Text as="p" className={styles.text}>
          Pour s&apos;occuper sérieusement de notre planète, il faut certes fixer des objectifs,
          mais il faut aussi des gens pour innover, pour construire et pour les atteindre.
        </Text>

        <Text as="p" className={styles.text}>
          Nous devons rapidement produire autrement, et nous avons pour cela besoin de développer
          des nouveaux savoir-faire et des nouveaux des savoir-être.
        </Text>

        <Text as="p" className={styles.text}>
          Pour relever ce défi, il faut anticiper les besoins, imaginer les métiers de demain,
          identifier, former et recruter.
        </Text>
        <Text as="p" className={styles.text}>
          Parce que la transition environnementale nous oblige à repenser les métiers et les
          compétences, Brawo a créé, Brawo Impact, le service de recrutement 100% spécialisé dans
          les métiers de la transformation durable.
        </Text>
      </BasePageLayout>
      <AppointmentSection />
    </>
  )
}

export const metadata: Metadata = {
  title: 'Manifeste'
}
