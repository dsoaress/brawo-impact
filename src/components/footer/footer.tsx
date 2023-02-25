import Link from 'next/link'

import { Container } from '../container'
import { Text } from '../text'
import { LinkedinIcon } from './assets/linkedin-icon'
import { Logo } from './assets/logo'
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
              <Text size="xs">Mentions Légales</Text>
            </Link>
            <Link
              className={style.footerLink}
              href="/"
              aria-label="Linkedin"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LinkedinIcon width={19} />
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
