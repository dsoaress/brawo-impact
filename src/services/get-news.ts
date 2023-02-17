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
    excerpt: string
  }[]
  totalPages: number
  page: number
}

interface GetNewsServiceParams {
  limit?: number
  page?: number
  slug?: string
}

export async function getNewsService({
  limit = 3,
  page = 1,
  slug
}: GetNewsServiceParams = {}): Promise<NewsResponse> {
  const query = qs.stringify(
    {
      limit,
      page,
      sort: 'publishedAt',
      where: slug ? { slug: { equals: slug } } : { published: { equals: 'true' } }
    },
    { addQueryPrefix: true }
  )
  return await fetch(`${process.env.API_URL}/news${query}`, {
    next: { revalidate: 60 }
  }).then(res => res.json())
}
