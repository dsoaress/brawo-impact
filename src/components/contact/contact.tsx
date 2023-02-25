import { Container } from '../container'
import { Heading } from '../heading'
import { Form } from './form'
import styles from './styles.module.css'

export function Contact() {
  return (
    <div className={styles.contactWrapper}>
      <Container>
        <Heading className={styles.heading} color="light" as="h1">
          Contactez-nous!
        </Heading>
        <Heading className={styles.subheading} color="light">
          Quelque soit votre besoin, nous sommes à votre écoute
        </Heading>

        <Form />
      </Container>
    </div>
  )
}
