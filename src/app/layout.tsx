import type { ReactNode } from 'react'

import { Footer } from '../components/footer'
import { getCssText, globalStyles } from '../styles/stitches.config'

export default function RootLayout({ children }: { children: ReactNode }) {
  globalStyles()
  return (
    <html lang="fr">
      <head>
        {/* TODO: fix this */}
        <style>
          {`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }

            body: {
              background-color: #F0F0F0;
            }
          `}
        </style>

        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
