import { styled } from '@stitches/react'
import Image from 'next/image'
import Link from 'next/link'

import { Heading as BaseHeading } from '../heading'

export const SectionWrapper = styled('div', {
  background: '#E4F6FD',
  padding: '72px 16px',
  '@md': {
    paddingTop: 80,
    paddingBottom: 80
  }
})

export const SectionHeading = styled(BaseHeading, {
  textAlign: 'center',
  margin: '0 0 40px',
  '@md': {
    marginBottom: 48
  }
})

export const SectionList = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(416px, 1fr))',
  gap: 32,
  marginBottom: 56,
  '@md': {
    marginBottom: 64
  }
})

export const CardWrapper = styled('div', {
  position: 'relative'
})

export const CardLink = styled(Link, {
  textDecoration: 'none'
})

export const CardCover = styled(Image, {
  width: '100%',
  height: 290,
  borderRadius: 8,
  objectFit: 'cover',
  zIndex: 1
})

export const DateWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#fff',
  width: 182,
  height: 42,
  margin: '-25px 0 21px 16px',
  borderRadius: 50,
  zIndex: 5
})

export const CtaLink = styled(Link, {
  display: 'flex',
  justifyContent: 'center',
  textDecoration: 'none'
})
