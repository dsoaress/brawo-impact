'use client'

import cn from 'classnames'

import { Container } from '../container'
import { Logo } from '../logo'
import { Nav } from './nav'
import styles from './styles.module.css'

type HeaderProps = {
  style?: 'solid' | 'transparent'
}

export function Header({ style = 'solid' }: HeaderProps) {
  return (
    <header className={styles[style]}>
      <Container>
        <div className={styles.headerWrapper}>
          <div
            className={cn(styles.logoWrapper, {
              [styles.logoWrapperSolid]: style === 'solid'
            })}
          >
            <Logo />
          </div>
          <Nav />
        </div>
      </Container>
    </header>
  )
}
