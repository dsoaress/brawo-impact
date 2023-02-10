import { NewsCard } from './news-card'

export interface News {
  cover: string
  title: string
  date: string
  description: string
}

const newsData: News[] = [
  {
    cover: 'https://source.unsplash.com/random/800x600',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    date: '2021-01-01',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl eu nunc.'
  },
  {
    cover: 'https://source.unsplash.com/random/800x600',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    date: '2021-01-01',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl eu nunc.'
  },
  {
    cover: 'https://source.unsplash.com/random/800x600',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    date: '2021-01-01',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl eu nunc. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl eu nunc.'
  }
]

export function NewsSection() {
  return (
    <div>
      <h2>Actualités de Brawo Impact</h2>
      {newsData.map((n, i) => (
        <NewsCard key={i} {...n} />
      ))}

      <button>Toutes nos actualités</button>
    </div>
  )
}
