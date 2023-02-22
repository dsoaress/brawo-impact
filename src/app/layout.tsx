import './styles.css'

import { Quicksand, Raleway, Varela_Round } from '@next/font/google'
import cn from 'classnames'
import type { ReactNode } from 'react'

import { Footer } from '../components/footer'

const quicksand = Quicksand({ subsets: ['latin'], variable: '--quicksand-font' })
const raleway = Raleway({ subsets: ['latin'], variable: '--raleway-font' })
const varelaRound = Varela_Round({
  weight: '400',
  subsets: ['latin'],
  variable: '--varela-round-font'
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head />
      <body className={cn(quicksand.variable, raleway.variable, varelaRound.variable)}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
