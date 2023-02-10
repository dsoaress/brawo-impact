import type { Domain } from './domains-section'

export function DomainCard({ description, icon, title }: Domain) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
