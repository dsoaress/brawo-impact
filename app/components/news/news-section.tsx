import { NewsCard } from './news-card'
import { getNewsService } from './services/get-news.service'

export async function NewsSection() {
  const newsData = await getNewsService()
  return (
    <div>
      <h2>Actualités de Brawo Impact</h2>
      {newsData.docs.map((n, i) => (
        <NewsCard key={i} {...n} />
      ))}

      <button>Toutes nos actualités</button>
    </div>
  )
}
