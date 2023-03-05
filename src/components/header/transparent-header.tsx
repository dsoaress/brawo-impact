import { Logo } from '../logo'
import { Nav } from './nav'
import styles from './styles.module.css'

export function TransparentHeader() {
  return (
    <>
      <div className={styles.logoWrapper}>
        <Logo style="light" />
      </div>
      <Nav style="light" />
    </>
  )
}
