import qs from 'qs'

interface NewsResponse {
  docs: {
    id: string
    title: string
    slug: string
    cover: {
      alt: string
      url: string
      blurhash: string
      width: number
      height: number
    }
    publishedAt: string
  }[]
}

export async function getNewsService(): Promise<NewsResponse> {
  const query = qs.stringify(
    { limit: 3, sort: 'publishedAt', where: { published: { equals: 'true' } } },
    { addQueryPrefix: true }
  )
  return fetch(`${process.env.API_URL}/news${query}`, { next: { revalidate: 60 } }).then(res =>
    res.json()
  )
}
