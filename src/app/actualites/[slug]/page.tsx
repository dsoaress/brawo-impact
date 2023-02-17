import { getNewsService } from '../../../services/get-news'

export default async function NewsItem({ params }: { params: { slug?: string } }) {
  const newsData = await getNewsService(params).then(res => res.docs[0])
  return (
    <main>
      <h1>{newsData.title}</h1>
    </main>
  )
}

export async function generateStaticParams() {
  const newsData = await getNewsService({ limit: 1000 })
  return newsData.docs.map(news => ({ slug: news.slug }))
}
