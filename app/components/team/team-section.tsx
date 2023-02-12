import { getTeamService } from './services/get-team.service'
import { List, Title, Wrapper } from './styles/team-section.style'
import { TeamCard } from './team-card'

export async function TeamSection() {
  const teamData = await getTeamService()
  return (
    <Wrapper>
      <Title>Notre équipe</Title>
      <List>
        {teamData.docs.map((t, i) => (
          <TeamCard key={i} {...t} />
        ))}
      </List>
    </Wrapper>
  )
}
