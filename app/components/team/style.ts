import Image from 'next/image'

import { styled } from '../../styles/stitches.config'
import { Heading as BaseHeading } from '../heading'
import { Text as BaseText } from '../text'

export const SectionWrapper = styled('div', {
  background: '#F7F7F7',
  padding: '72px 40px',
  '@md': {
    paddingTop: 80,
    paddingBottom: 80
  }
})

export const SectionHeading = styled(BaseHeading, {
  textAlign: 'center',
  margin: '0 0 40px',
  '@md': {
    marginBottom: 56
  }
})

export const SectionList = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: 32
})

export const CardWrapper = styled('div', {
  marginTop: 104
})

export const CardContent = styled('div', {
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

export const CardHeading = styled(BaseHeading, {
  margin: '0 0 16px'
})

export const CardText = styled(BaseText, {
  margin: '0 0 16px'
})
