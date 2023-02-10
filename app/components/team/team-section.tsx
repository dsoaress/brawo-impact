import { TeamCard } from './team-card'

export interface Team {
  avatar: string
  name: string
  role: string
}

const teamData: Team[] = [
  {
    avatar:
      'https://avatars.githubusercontent.com/u/1150553?s=460&u=3d2e3c4d4696a4fe6f8b3aa6221f75d22cf3f69d&v=4',
    name: 'Guillaume',
    role: 'CEO'
  },
  {
    avatar:
      'https://avatars.githubusercontent.com/u/1150553?s=460&u=3d2e3c4d4696a4fe6f8b3aa6221f75d22cf3f69d&v=4',
    name: 'Guillaume',
    role: 'CEO'
  },
  {
    avatar:
      'https://avatars.githubusercontent.com/u/1150553?s=460&u=3d2e3c4d4696a4fe6f8b3aa6221f75d22cf3f69d&v=4',
    name: 'Guillaume',
    role: 'CEO'
  },
  {
    avatar:
      'https://avatars.githubusercontent.com/u/1150553?s=460&u=3d2e3c4d4696a4fe6f8b3aa6221f75d22cf3f69d&v=4',
    name: 'Guillaume',
    role: 'CEO'
  },
  {
    avatar:
      'https://avatars.githubusercontent.com/u/1150553?s=460&u=3d2e3c4d4696a4fe6f8b3aa6221f75d22cf3f69d&v=4',
    name: 'Guillaume',
    role: 'CEO'
  },
  {
    avatar:
      'https://avatars.githubusercontent.com/u/1150553?s=460&u=3d2e3c4d4696a4fe6f8b3aa6221f75d22cf3f69d&v=4',
    name: 'Guillaume',
    role: 'CEO'
  }
]

export function TeamSection() {
  return (
    <div>
      <h2>Notre équipe</h2>
      {teamData.map((t, i) => (
        <TeamCard key={i} {...t} />
      ))}
    </div>
  )
}
