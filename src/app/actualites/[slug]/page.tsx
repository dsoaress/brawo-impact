import Image from 'next/image'
import type { Metadata } from 'next/types'

import { BasePageLayout } from '../../../components/base-page-layout'
import { Header } from '../../../components/header'
import { Heading } from '../../../components/heading'
import { NewsSection } from '../../../components/news'
import { Breadcrumb } from '../../../components/news/breadcrumb'
import { Share } from '../../../components/news/share'
import { Serialize } from '../../../components/serialize'
import { Text } from '../../../components/text'
import { constants } from '../../../config/constants'
import { getNewsService } from '../../../services/get-news'
import { formatDate } from '../../../utils/format-date'
import styles from './styles.module.css'

export default async function NewsItem({ params }: { params: { slug?: string } }) {
  const newsData = await getNewsService(params).then(res => res.docs[0])
  const url = `${constants.SITE_URL}/actualites/${newsData.slug}`
  return (
    <>
      <Header />
      <div className={styles.heroWrapper}>
        <Image src={newsData.cover.url} alt={newsData.cover.alt} className={styles.hero} fill />
      </div>
      <BasePageLayout>
        <Breadcrumb />
        <Heading as="h1" className={styles.heading}>
          {newsData.title}
        </Heading>
        <Text as="p" color="accent" className={styles.date} weight="bold">
          {formatDate(newsData.publishedAt, 'short')}
        </Text>
        <Serialize content={newsData.content} />
        <Share url={url} />
      </BasePageLayout>

      {/* @ts-expect-error Server Component */}
      <NewsSection title="Autres actualités d'intérêt" withBackground={false} withCta={false} />
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
