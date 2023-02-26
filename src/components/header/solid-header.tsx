import { Logo } from '../logo'
import { Nav } from './nav'
import styles from './styles.module.css'

export function SolidHeader() {
  return (
    <>
      <div className={styles.logoWrapperSolid}>
        <Logo />
      </div>
      <Nav />
    </>
  )
}
