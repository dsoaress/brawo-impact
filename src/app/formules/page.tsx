import type { Metadata } from 'next/types'

import { AppointmentSection } from '../../components/appointment-section'
import { DomainsSection } from '../../components/domains'
import { FormulasDescription, FormulasSupplement } from '../../components/formulas'
import { Header } from '../../components/header'
import { Heading } from '../../components/heading'
import { NormalHero } from '../../components/hero'

export default function FormulasPage() {
  return (
    <>
      <Header />
      <NormalHero>
        <Heading color="light" style={{ marginBottom: 40 }}>
          Recrutez les talents les meilleurs talents avec Brawo Impact
        </Heading>
        <Heading color="light" as="h3">
          Le service de recrutement pensé pour les acteurs de la transition durable.
        </Heading>
      </NormalHero>
      <FormulasDescription />
      <FormulasSupplement />
      <DomainsSection />
      <AppointmentSection />
    </>
  )
}

export const metadata: Metadata = {
  title: 'Formules'
}
