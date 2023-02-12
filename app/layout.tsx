import type { ReactNode } from 'react'

import { getCssText, globalStyles } from './styles/stitches.config'

export default function RootLayout({ children }: { children: ReactNode }) {
  globalStyles()
  return (
    <html lang="fr">
      <head>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
