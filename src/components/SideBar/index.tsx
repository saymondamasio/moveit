import Link from 'next/link'
import Award from '../../../public/assets/award.svg'
import Home from '../../../public/assets/home.svg'
import { ActiveLink } from '../ActiveLink'
import styles from './styles.module.css'

export function SideBar() {
  return (
    <aside className={styles.container}>
      <Link href="/">
        <a>
          <img src="assets/logo.svg" alt="Logo" />
        </a>
      </Link>
      <nav>
        <ActiveLink href="/" activeClassName={styles.active}>
          <a>
            <Home />
          </a>
        </ActiveLink>

        <ActiveLink href="/leaderboard" activeClassName={styles.active}>
          <a>
            <Award />
          </a>
        </ActiveLink>
      </nav>
    </aside>
  )
}
