import { DomainsSection } from './components/domains'
import { FormulasSection } from './components/formulas'
import { NewsSection } from './components/news'
import { TeamSection } from './components/team'

export default function Home() {
  return (
    <main>
      <DomainsSection />
      <FormulasSection />

      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <TeamSection />

      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <NewsSection />
    </main>
  )
}
