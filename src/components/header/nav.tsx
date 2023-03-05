'use client'

import Link from 'next/link'
import { useState } from 'react'

import { useBreakpoint } from '../../hooks/useBreakpoint'
import { Button } from '../button'
import { Text } from '../text'
import { Burger } from './assets/burguer'
import styles from './styles.module.css'

export function Nav({ style }: { style?: 'color' | 'light' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const breakpoint = useBreakpoint()

  return (
    <nav>
      {breakpoint === 'sm' ? (
        <>
          <Burger onClick={() => setIsMenuOpen(!isMenuOpen)} />
          {isMenuOpen ? (
            <div className={styles.mobileMenuWrapper}>
              <ul>
                <li>
                  <Link href="/">
                    <Text size="lg" color="light">
                      Home
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Text size="lg" color="light">
                      Espace Candidat
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="/manifeste">
                    <Text size="lg" color="light">
                      Manifeste
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="/prendre-rendez-vous">
                    <Text size="lg" color="light">
                      Prendre rendez-vous
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="/actualites/page/1">
                    <Text size="lg" color="light">
                      Actualités
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="/mentions-legales">
                    <Text size="lg" color="light">
                      Mentions Légales
                    </Text>
                  </Link>
                </li>
              </ul>
              <Link href="/contact">
                <Button style="outline">Contact</Button>
              </Link>
            </div>
          ) : null}
        </>
      ) : (
        <div className={styles.buttonWrapper}>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <Link href="https://www.brawo.fr/candidat" target="_blank" rel="noreferrer noopener">
            <Button style={style === 'light' ? 'tertiary' : 'secondary'}>Espace Candidat</Button>
          </Link>
          {style === 'light' ? (
            <Link href="/contact">
              <Button style="secondary">Contact</Button>
            </Link>
          ) : null}
        </div>
      )}
    </nav>
  )
}
