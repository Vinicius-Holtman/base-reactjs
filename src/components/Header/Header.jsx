import styles from './Header.module.css'

import igniteLogo from '../assets/image-logo.svg'

export function Header() {
  return (
    <>
      <img src={igniteLogo} alt="Ignite logo" />
      <strong className={styles.header}>Ignite Feed</strong>
    </>
  )
}