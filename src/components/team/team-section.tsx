import { getTeamService } from '../../services/get-team'
import { Container } from '../container'
import { Heading } from '../heading'
import styles from './styles.module.css'
import { TeamCard } from './team-card'

export async function TeamSection() {
  const teamData = await getTeamService()
  return (
    <div className={styles.sectionWrapper}>
      <Container>
        <Heading className={styles.sectionHeading}>Notre équipe</Heading>
        <div className={styles.sectionList}>
          {teamData.docs.map((t, i) => (
            <TeamCard key={i} {...t} />
          ))}
        </div>
      </Container>
    </div>
  )
}
