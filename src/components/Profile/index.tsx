import { useSession } from 'next-auth/react'
import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengeContext'
import styles from './styles.module.css'

export function Profile() {
  const { data: session } = useSession()

  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img
        src={session?.user?.image ?? undefined}
        alt={session?.user?.name ?? undefined}
      />

      <div>
        <strong>{session?.user?.name}</strong>
        <p>
          <img src="assets/level.svg" alt="" />
          Level {level}
        </p>
      </div>
    </div>
  )
}
