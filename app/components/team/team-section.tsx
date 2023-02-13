import { getTeamService } from './get-team'
import { SectionHeading, SectionList, SectionWrapper } from './style'
import { TeamCard } from './team-card'

export async function TeamSection() {
  const teamData = await getTeamService()
  return (
    <SectionWrapper>
      <SectionHeading>Notre équipe</SectionHeading>
      <SectionList>
        {teamData.docs.map((t, i) => (
          <TeamCard key={i} {...t} />
        ))}
      </SectionList>
    </SectionWrapper>
  )
}
