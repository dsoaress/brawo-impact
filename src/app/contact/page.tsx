import type { Metadata } from 'next/types'

import { Contact } from '../../components/contact'
import { Header } from '../../components/header'

export default function ContactPage() {
  return (
    <>
      <Header />
      <Contact />
    </>
  )
}

export const metadata: Metadata = {
  title: 'Contact'
}
