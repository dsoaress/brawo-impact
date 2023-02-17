import { Quicksand, Raleway, Varela_Round } from '@next/font/google'

import { styled } from '../../styles/stitches.config'

const quicksand = Quicksand({ subsets: ['latin'] })
const varelaRound = Varela_Round({ weight: '400', subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })

export const Text = styled('span', {
  variants: {
    font: {
      quicksand: {
        fontFamily: quicksand.style.fontFamily
      },

      varelaRound: {
        fontFamily: varelaRound.style.fontFamily
      },

      raleway: {
        fontFamily: raleway.style.fontFamily
      }
    },

    size: {
      xs: {
        fontSize: 16
      },

      sm: {
        fontSize: 18
      },

      md: {
        fontSize: 20
      },

      lg: {
        fontSize: 24
      }
    },

    weight: {
      normal: {
        fontWeight: 400
      },

      medium: {
        fontWeight: 500
      },

      semibold: {
        fontWeight: 600
      },

      bold: {
        fontWeight: 700
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
    font: 'quicksand',
    size: 'sm',
    weight: 'medium',
    color: 'dark'
  }
})
