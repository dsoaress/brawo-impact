import { Quicksand } from '@next/font/google'

import { styled } from '../../styles/stitches.config'

const quicksand = Quicksand({ subsets: ['latin'] })

export const Button = styled('button', {
  fontFamily: quicksand.style.fontFamily,
  fontSize: 16,
  fontWeight: 700,
  background: '#50AEE9',
  color: '#fff',
  padding: '16px 40px',
  borderRadius: 32,
  border: 'none',
  cursor: 'pointer',
  transition: 'transform .2s ease-in-out',

  hover: {
    transform: 'scale(1.1)'
  },

  '@md': {
    fontSize: 20
  }
})
