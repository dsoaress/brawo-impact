import { Heading } from '../heading'
import { Text } from '../text'
import styles from './styles.module.css'

export function FormulasSupplement() {
  return (
    <div className={styles.formulasSupplementWrapper}>
      <div className={styles.formulasSupplementFirstBox}>
        <div>
          <Heading as="h3">Expertise et spécialisation sur les métiers à impact</Heading>
          <Text as="p">
            Nous avons développé une forte expertise dans l&apos;identification des compétences
            vertes nécessaires pour réussir la transformation durable
          </Text>
        </div>

        <div>
          <Heading as="h3">L&apos;approche directe dans notre ADN</Heading>
          <Text as="p">
            Nous ciblons, attirons et engageons les meilleurs profils en appui sur une méthode
            d&apos;acquisition innovante
          </Text>
        </div>

        <div>
          <Heading as="h3">Evaluation des valeurs environnementales et sociétales</Heading>
          <Text as="p">
            Nous avons développé des tests pour évaluer l&apos;engagement et l&apos;adéquation des
            candidats avec les valeurs durables.
          </Text>
        </div>

        <div>
          <Heading as="h3">Recrutement au succès partout en France</Heading>
          <Text as="p">
            Nous avons développé des tests pour évaluer l&apos;engagement et l&apos;adéquation des
            candidats avec les valeurs durables.
          </Text>
        </div>
      </div>
      <div className={styles.formulasSupplementSecondBox}>
        <Heading color="light">
          Attirer et recrutez les talents d’aujourd’hui et de demain avec Brawo Impact
        </Heading>
      </div>
    </div>
  )
}
