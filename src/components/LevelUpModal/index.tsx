import { useContext } from 'react'
import Twitter from '../../../public/assets/twitter.svg'
import { ChallengesContext } from '../../contexts/ChallengeContext'
import styles from './styles.module.css'

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)

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
        <button className={styles.shareButton} type="button">
          Compartilhar no Twitter <Twitter />
        </button>
      </div>
    </div>
  )
}
