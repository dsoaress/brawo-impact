import NextLink from 'next/link'

import { styled } from '../../styles/stitches.config'

export const FooterWrapper = styled('footer', {
  padding: 80,
  background: '#fff'
})

export const Box = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 38,

  '@md': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export const FooterLogoWrapper = styled('div', {
  width: 236,
  margin: '0 auto',

  '@md': {
    width: 300,
    margin: 0
  }
})

export const LinksWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 22,
  alignItems: 'center',

  '@md': {
    alignItems: 'flex-end'
  }
})

export const Link = styled(NextLink, {
  textDecoration: 'none',
  color: '#383838'
})

export const CopyRightWrapper = styled('div', {
  textAlign: 'center',
  marginTop: 48
})
