import { Logo } from '../logo'
import { Nav } from './nav'
import styles from './styles.module.css'

export function SolidHeaderMobile() {
  return (
    <>
      <div className={styles.logoWrapperSolid}>
        <Logo style="light" />
      </div>
      <Nav />
    </>
  )
}
