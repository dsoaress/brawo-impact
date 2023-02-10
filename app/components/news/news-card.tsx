import { formatDate } from '../../utils/format-date'
import type { News } from './news-section'

export function NewsCard({ cover, date, description, title }: News) {
  return (
    <div>
      <img src={cover} alt={title} />
      <h3>{title}</h3>
      <p>{formatDate(date)}</p>
      <p>{description}</p>
    </div>
  )
}
