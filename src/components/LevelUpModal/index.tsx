import { useContext } from 'react'
import Twitter from '../../../public/assets/twitter.svg'
import { ChallengesContext } from '../../contexts/ChallengeContext'
import styles from './styles.module.css'

export function LevelUpModal() {
  const { level, challengesCompleted, totalExperience, closeLevelUpModal } =
    useContext(ChallengesContext)
  const twitterUrl = encodeURIComponent(
    `${process.env.NEXT_PUBLIC_APP_URL}/conquest?level=${String(
      level
    )}&challenges=${String(challengesCompleted)}&experience=${String(
      totalExperience
    )}`
  )

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div>
          <header>{level}</header>

          <strong>Parabéns</strong>
          <p>você alcançou um novo level.</p>

          <button
            className={styles.closeModal}
            type="button"
            onClick={closeLevelUpModal}
          >
            <img src="assets/close.svg" alt="Fechar modal" />
          </button>
        </div>
        <a
          target="_blank"
          href={`https://twitter.com/intent/tweet?url=${twitterUrl}`}
          className={styles.shareButton}
          type="button"
          rel="noreferrer"
        >
          Compartilhar no Twitter <Twitter />
        </a>
      </div>
    </div>
  )
}
