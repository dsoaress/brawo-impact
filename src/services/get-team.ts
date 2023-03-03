import qs from 'qs'

interface TeamResponse {
  docs: {
    id: string
    name: string
    role: string
    image: {
      alt: string
      url: string
      blurhash: string
      width: number
      height: number
    }
  }[]
}

export async function getTeamService(): Promise<TeamResponse> {
  const query = qs.stringify({ limit: 50, sort: 'order' }, { addQueryPrefix: true })
  return fetch(`${process.env.API_URL}/team${query}`, { next: { revalidate: 1 } }).then(res =>
    res.json()
  )
}
