'use client'

import { useBreakpoint } from '../../hooks/useBreakpoint'
import { BaseHeader } from './base-header'
import { SolidHeader } from './solid-header'
import { SolidHeaderMobile } from './solid-header-mobile'
import { TransparentHeader } from './transparent-header'
import { TransparentHeaderMobile } from './transparent-header-mobile'

type HeaderProps = {
  style?: 'solid' | 'transparent'
}

export function Header({ style = 'solid' }: HeaderProps) {
  const breakpoint = useBreakpoint()

  if (style === 'solid' && breakpoint === 'sm') {
    return (
      <BaseHeader style={style}>
        <SolidHeaderMobile />
      </BaseHeader>
    )
  }

  if (style === 'solid' && breakpoint !== 'sm') {
    return (
      <BaseHeader style={style}>
        <SolidHeader />
      </BaseHeader>
    )
  }

  if (style === 'transparent' && breakpoint === 'sm') {
    return (
      <BaseHeader style={style}>
        <TransparentHeaderMobile />
      </BaseHeader>
    )
  }

  return (
    <BaseHeader style={style}>
      <TransparentHeader />
    </BaseHeader>
  )
}
