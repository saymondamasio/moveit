import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengeContext'
import styles from './styles.module.css'

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="assets/close.svg" alt="Fechar modal" />
        </button>
      </div>
    </div>
  )
}