import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import type { ReactNode } from 'react'

import { Container } from '../container'
import styles from './styles.module.css'

export function BasePageLayout({
  children,
  hero
}: {
  children: ReactNode
  hero?: StaticImageData
}) {
  return (
    <>
      {hero && (
        <div className={styles.heroWrapper}>
          <Image src={hero.src} alt="" className={styles.hero} fill />
        </div>
      )}
      <Container>
        <div className={styles.content}>{children}</div>
      </Container>
    </>
  )
}
