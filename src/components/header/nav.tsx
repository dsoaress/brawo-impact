'use client'

import { useBreakpoint } from '../../hooks/useBreakpoint'
import { Button } from '../button'
import { Burger } from './assets/burguer'

export function Nav() {
  const breakpoint = useBreakpoint()

  return (
    <nav>
      {breakpoint === 'sm' ? (
        <>
          <Burger />
        </>
      ) : (
        <Button style="secondary">Contact</Button>
      )}
    </nav>
  )
}
