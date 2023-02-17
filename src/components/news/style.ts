import Image from 'next/image'
import Link from 'next/link'

import { styled } from '../../styles/stitches.config'
import { Button } from '../button'
import { Heading as BaseHeading } from '../heading'
import { Text } from '../text'

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

export const InternalSectionWrapper = styled('div', {})

export const InternalSectionHeading = styled(BaseHeading, {
  textAlign: 'center',
  textTransform: 'uppercase'
})

export const InternalSectionSubHeading = styled(BaseHeading, {
  textAlign: 'center'
})

export const InternalSectionList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 32
})

export const InternalCardWrapper = styled('div', {
  boxShadow: '4px 4px 8px rgba(76, 76, 76, 0.16)',
  borderRadius: 8,
  padding: '24px 16px',
  background: '#fff',

  '@md': {
    padding: 32
  }
})

export const InternalCardLink = styled(Link, {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: 16,
  textDecoration: 'none',
  lineClamp: 3,

  '@md': {
    gridTemplateColumns: '1fr 1fr'
  }
})

export const InternalCardCover = styled(Image, {
  width: '100%',
  height: 206,
  borderRadius: 4,
  objectFit: 'cover',

  '@md': {
    height: 336
  }
})

export const InternalCardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16
})

export const InternalDateWrapper = styled(Text, {})

export const InternalCtaWrapper = styled('div', {})

export const InternalCardTitle = styled(BaseHeading, {
  fontSize: '24px !important'
})

export const InternalCardDescription = styled(Text, {})

export const InternalCardButton = styled(Button, {})

export const PaginationWrapper = styled('ul', {
  display: 'flex',
  gap: 16,
  alignItems: 'center',
  marginTop: 64
})

export const PaginationItem = styled('li', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  background: '#fff',
  borderRadius: 4,
  cursor: 'pointer',
  border: '1px solid #E0E0E0',

  variants: {
    active: {
      true: {
        background: '#50AEE9',
        borderColor: '#E0E0E0'
      }
    }
  }
})

export const PaginationItemLink = styled(Link, {
  textDecoration: 'none'
})
