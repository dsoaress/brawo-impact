import { styled } from '../../styles/stitches.config'
import { Heading as BaseHeading } from '../heading'

export const SectionWrapper = styled('div', {
  background: '#E4F6FD',
  padding: '44px 16px',

  '@md': {
    paddingTop: '80px 64px'
  }
})

export const SectionHeading = styled(BaseHeading, {
  marginBottom: 24,
  textAlign: 'center',

  '@md': {
    marginBottom: 48
  }
})

export const SectionList = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(236px, 1fr))',
  gap: 32
})

export const CardWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  background: '#fff',
  border: '2px solid #F6F6F6',
  borderRadius: 4,
  padding: '32px 48px',

  '@md': {
    alignItems: 'center',
    padding: '60px 16px',
    textAlign: 'center'
  }
})

export const IconWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 24,

  svg: {
    height: 48,
    color: '#50AEE9',
    flexShrink: 0
  },

  '@md': {
    flexDirection: 'column'
  }
})

export const Heading = styled(BaseHeading, {
  fontSize: '20px !important'
})
