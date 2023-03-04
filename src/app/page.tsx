import { AccelerateSection } from '../components/accelerate-section'
import { AppointmentSection } from '../components/appointment-section'
import { DomainsSection } from '../components/domains'
import { FormulasSection } from '../components/formulas'
import { Header } from '../components/header'
import { MainHero } from '../components/main-hero'
import { ManifestSection } from '../components/manifest-section'
import { NewsSection } from '../components/news'
import { TeamSection } from '../components/team'

export default function Home() {
  return (
    <>
      <Header style="transparent" />
      <main>
        <MainHero />
        <ManifestSection />
        <DomainsSection />
        <FormulasSection />
        <AccelerateSection />

        {/* @ts-expect-error Server Component */}
        <TeamSection />

        {/* @ts-expect-error Server Component */}
        <NewsSection />
        <AppointmentSection />
      </main>
    </>
  )
}
