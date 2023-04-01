import { Heading } from '../heading'
import { Text } from '../text'
import styles from './styles.module.css'

export function FormulasSupplement() {
  return (
    <div className={styles.formulasSupplementWrapper}>
      <div className={styles.formulasSupplementFirstBox}>
        <Text as="p" size="md" weight="bold">
          Expertise Nous avons développé une expertise forte dansl’identification et le{' '}
          <span className={styles.formulasSupplementSpan}>
            recrutement des métiers de la transformation durable.
          </span>
        </Text>

        <Text as="p" size="md" weight="bold">
          L’approche directe dans notre ADN Nous ciblons les meilleurs profils et les évaluons avec
          nos{' '}
          <span className={styles.formulasSupplementSpan}>
            tests comportementaux de dernière génération.
          </span>
        </Text>

        <Text as="p" size="md" weight="bold">
          Fonctionnement au succès Notre facturation se fait au succès,{' '}
          <span className={styles.formulasSupplementSpan}>
            c’est-à-dire lors de l’entrée en poste du candidat.
          </span>
        </Text>

        <Text as="p" size="md" weight="bold">
          Recrutement partout en France Notre agence est digitale et{' '}
          <span className={styles.formulasSupplementSpan}>
            notre fonctionnement est dématérialisé.
          </span>
        </Text>
      </div>
      <div className={styles.formulasSupplementSecondBox}>
        <Heading color="light">
          Attirer et recrutez les talents d’aujourd’hui et de demain avec Brawo Impact
        </Heading>
      </div>
    </div>
  )
}
