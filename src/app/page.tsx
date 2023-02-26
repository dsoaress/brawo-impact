import { DomainsSection } from '../components/domains'
import { FormulasSection } from '../components/formulas'
import { Header } from '../components/header'
import { NewsSection } from '../components/news'
import { TeamSection } from '../components/team'

export default function Home() {
  return (
    <>
      <Header style="transparent" />
      <main>
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
