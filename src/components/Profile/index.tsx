import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengeContext'
import styles from './styles.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/saymondamasio.png" alt="Saymon Damásio" />

      <div>
        <strong>Saymon Damásio</strong>
        <p>
          <img src="assets/level.svg" alt="" />
          Level {level}
        </p>
      </div>
    </div>
  )
}
