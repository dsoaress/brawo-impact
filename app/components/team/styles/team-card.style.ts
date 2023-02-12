import { Raleway } from '@next/font/google'
import Image from 'next/image'

import { styled } from '../../../styles/stitches.config'

const raleway = Raleway({ subsets: ['latin'] })

export const Wrapper = styled('div', {
  marginTop: 104
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#fff',
  padding: 24,
  borderRadius: 8,
  boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.16)'
})

export const Avatar = styled(Image, {
  width: 160,
  height: 160,
  borderRadius: '50%',
  margin: '-104px 0 40px'
})

export const Title = styled('h3', {
  color: '#00A85B',
  fontFamily: raleway.style.fontFamily,
  fontSize: 26,
  lineHeight: 1.2,
  margin: '0 0 16px',
  fontWeight: 700
})

export const Role = styled('p', {
  color: '#383838',
  fontFamily: raleway.style.fontFamily,
  fontSize: 16,
  lineHeight: 1.2,
  margin: '0 0 16px',
  fontWeight: 600
})
