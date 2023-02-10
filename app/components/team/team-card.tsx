import type { Team } from './team-section'

export function TeamCard({ avatar, name, role }: Team) {
  return (
    <div>
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  )
}
