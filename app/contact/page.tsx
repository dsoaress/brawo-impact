import { Quicksand, Varela_Round } from '@next/font/google'

const varelaRound = Varela_Round({ weight: '400', subsets: ['latin'] })
const quicksand = Quicksand({ subsets: ['latin'] })

export default function Contact() {
  return (
    <main>
      <p className={varelaRound.className}>Hello </p>
      <p className={quicksand.className}>World</p>
    </main>
  )
}
