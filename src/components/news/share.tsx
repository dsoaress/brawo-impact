import Link from 'next/link'
import { GrFacebook, GrLinkedin, GrTwitter } from 'react-icons/gr'

import { Text } from '../text'
import styles from './styles.module.css'

export function Share({ url }: { url: string }) {
  return (
    <div className={styles.shareWrapper}>
      <Text as="p" weight="bold">
        Partager
      </Text>
      <div className={styles.shareList}>
        <Link
          className={styles.shareLink}
          aria-label="Facebook"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <GrFacebook size={22} />
        </Link>
        <Link
          className={styles.shareLink}
          aria-label="Twitter"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          href={`https://twitter.com/intent/tweet?url=${url}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <GrTwitter size={22} />
        </Link>
        <Link
          className={styles.shareLink}
          aria-label="Linkedin"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <GrLinkedin size={22} />
        </Link>
      </div>
    </div>
  )
}
