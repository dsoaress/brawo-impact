import './styles.css'

import cn from 'classnames'
import { Quicksand, Raleway, Varela_Round } from 'next/font/google'
import type { Metadata } from 'next/types'
import type { ReactNode } from 'react'

import { Footer } from '../components/footer'
import { constants } from '../config/constants'

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

export const metadata: Metadata = {
  title: {
    default: constants.SITE_NAME,
    template: '%s | ' + constants.SITE_NAME
  },
  description: constants.SITE_DESCRIPTION,
  icons: {
    // TODO: Add more icons
    icon: '/favicon.ico'
  },
  keywords: constants.SITE_KEYWORDS
}
