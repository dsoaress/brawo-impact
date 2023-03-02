import type { Metadata } from 'next/types'

import { Container } from '../../../components/container'
import { Header } from '../../../components/header'
import { Serialize } from '../../../components/serialize'
import { constants } from '../../../config/constants'
import { getNewsService } from '../../../services/get-news'

export default async function NewsItem({ params }: { params: { slug?: string } }) {
  const newsData = await getNewsService(params).then(res => res.docs[0])
  return (
    <>
      <Header />
      <Container>
        <h1>{newsData.title}</h1>
        <Serialize content={newsData.content} />
      </Container>
    </>
  )
}

export async function generateStaticParams() {
  const newsData = await getNewsService({ limit: 1000 })
  return newsData.docs.map(news => ({ slug: news.slug }))
}

export async function generateMetadata({
  params
}: {
  params: { slug?: string }
}): Promise<Metadata> {
  const newsData = await getNewsService(params).then(res => res.docs[0])
  return {
    title: newsData.title,
    description: newsData.excerpt,
    openGraph: {
      type: 'article',
      countryName: 'France',
      locale: 'fr_FR',
      description: newsData.excerpt,
      title: newsData.title,
      url: `${constants.SITE_URL}/actualites/${newsData.slug}`,
      publishedTime: newsData.publishedAt,
      siteName: constants.SITE_NAME,
      // TODO: Add image
      images: []
    },
    twitter: {
      card: 'summary_large_image',
      title: newsData.title,
      site: constants.SITE_NAME,
      description: newsData.excerpt,
      // TODO: Add image
      images: ['']
    }
  }
}
