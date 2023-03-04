import Link from 'next/link'

import { Button } from '../button'
import { Container } from '../container'
import { Gradient } from '../gradient'
import { Heading } from '../heading'
import styles from './styles.module.css'

export function AppointmentSection() {
  return (
    <div className={styles.appointmentWrapper}>
      <Gradient />
      <Container>
        <div className={styles.appointmentContainer}>
          <Heading color="light" as="h1" className={styles.heading}>
            Recrutez dès aujourd&apos;hui vos futurs talents
          </Heading>
          <Link href="/prendre-rendez-vous">
            <Button>Prendre rendez-vous</Button>
          </Link>
        </div>
      </Container>
    </div>
  )
}
