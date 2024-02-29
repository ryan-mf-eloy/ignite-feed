import styles from "./Header.module.css"

import igniteFeedLogo from "../../assets/ignite-feed.svg"

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteFeedLogo} alt="Ignite Feed" />
    </header>
  )
}