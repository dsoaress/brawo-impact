import { getNewsService } from '../../services/get-news'
import { Button } from '../button'
import { NewsCard } from './news-card'
import { CtaLink, SectionHeading, SectionList, SectionWrapper } from './style'

export async function NewsSection() {
  const newsData = await getNewsService()
  return (
    <SectionWrapper>
      <SectionHeading>Actualités de Brawo Impact</SectionHeading>
      <SectionList>
        {newsData.docs.map((n, i) => (
          <NewsCard key={i} {...n} />
        ))}
      </SectionList>

      <CtaLink href="/actualites/page">
        <Button>Toutes nos actualités</Button>
      </CtaLink>
    </SectionWrapper>
  )
}
