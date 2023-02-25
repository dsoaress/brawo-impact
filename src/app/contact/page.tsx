import type { Metadata } from 'next/types'

import { Contact } from '../../components/contact'

export default function ContactPage() {
  return <Contact />
}

export const metadata: Metadata = {
  title: 'Contact'
}
