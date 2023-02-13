import { Quicksand, Raleway, Varela_Round } from '@next/font/google'

import { styled } from '../../styles/stitches.config'

const quicksand = Quicksand({ subsets: ['latin'] })
const varelaRound = Varela_Round({ weight: '400', subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })

export const Heading = styled('h2', {
  color: '#383838',
  lineHeight: 1.2,
  fontWeight: 700,

  variants: {
    as: {
      h1: {
        fontSize: 28,
        fontFamily: varelaRound.style.fontFamily,

        '@md': {
          fontSize: 40
        }
      },

      h2: {
        fontSize: 28,
        fontFamily: quicksand.style.fontFamily,

        '@md': {
          fontSize: 40
        }
      },

      h3: {
        fontSize: 26,
        fontFamily: raleway.style.fontFamily
      }
    },

    color: {
      dark: {
        color: '#383838'
      },

      light: {
        color: '#E4F6FD'
      },

      accent: {
        color: '#00A85B'
      }
    }
  },

  defaultVariants: {
    as: 'h2',
    color: 'dark'
  }
})
