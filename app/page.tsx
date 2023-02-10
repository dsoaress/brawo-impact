import { DomainsSection } from './components/domains/domains-section'
import { FormulasSection } from './components/formulas/formulas-section'
import { NewsSection } from './components/news/news-section'
import { TeamSection } from './components/team/team-section'

export default function Home() {
  return (
    <main>
      <h1>Hello</h1>

      <DomainsSection />
      <FormulasSection />
      <TeamSection />
      <NewsSection />
    </main>
  )
}
