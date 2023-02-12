import { Quicksand } from '@next/font/google'

import { styled } from '../../../styles/stitches.config'

const quicksand = Quicksand({ subsets: ['latin'] })

export const Wrapper = styled('div', {
  background: '#F7F7F7',
  padding: '72px 40px',

  '@md': {
    paddingTop: 80,
    paddingBottom: 80
  }
})

export const Title = styled('h2', {
  color: '#383838',
  fontFamily: quicksand.style.fontFamily,
  fontSize: 28,
  lineHeight: 1.2,
  margin: '0 0 40px',
  textAlign: 'center',
  fontWeight: 700,

  '@md': {
    fontSize: 40,
    marginBottom: 56
  }
})

export const List = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: 32
})
