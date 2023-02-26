import { DomainsSection } from '../components/domains'
import { FormulasSection } from '../components/formulas'
import { Header } from '../components/header'
import { MainHero } from '../components/main-hero'
import { NewsSection } from '../components/news'
import { TeamSection } from '../components/team'

export default function Home() {
  return (
    <>
      <Header style="transparent" />
      <main>
        <MainHero />
        <DomainsSection />
        <FormulasSection />

        {/* @ts-expect-error Server Component */}
        <TeamSection />

        {/* @ts-expect-error Server Component */}
        <NewsSection />
      </main>
    </>
  )
}
