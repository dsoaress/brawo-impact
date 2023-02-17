import { createStitches, globalCss } from '@stitches/react'

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  }
})

const { getCssText, styled } = createStitches({
  media: {
    sm: '(min-width: 480px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 976px)',
    xl: '(min-width: 1440px)'
  }
})

export { getCssText, globalStyles, styled }
