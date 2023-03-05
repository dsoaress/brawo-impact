import Link from 'next/link'
import { GrLinkedinOption } from 'react-icons/gr'

import { Container } from '../container'
import { Logo } from '../logo'
import { Text } from '../text'
import style from './styles.module.css'

export function Footer() {
  return (
    <footer className={style.footerWrapper}>
      <Container>
        <div className={style.box}>
          <div className={style.logoWrapper}>
            <Logo />
          </div>
          <div className={style.linksWrapper}>
            <Link className={style.footerLink} href="/">
              <Link href="/mentions-legales" style={{ textDecoration: 'none' }}>
                <Text size="xs">Mentions Légales</Text>
              </Link>
            </Link>
            <Link
              className={style.footerLink}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              href="https://www.linkedin.com/showcase/brawo-impact"
              aria-label="Linkedin"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GrLinkedinOption size={22} />
            </Link>
          </div>
        </div>
        <div className={style.copyRight}>
          <Text size="xs" weight="normal">
            Brawo Impact {new Date().getFullYear()} © Copyright - Tous droits réservés
          </Text>
        </div>
      </Container>
    </footer>
  )
}
