import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengeContext'
import styles from './styles.module.css'

const icons = {
  body: 'assets/body.svg',
  eye: 'assets/eye.svg',
}

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext)

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={icons[activeChallenge.type]} alt="Desafio" />
            <strong>Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <div>
            <strong>
              Inicie um ciclo para receber desafios a serem completados
            </strong>

            <p>
              <img src="assets/level-up.svg" alt="level Up" />
              Complete-os e ganhe experiência e avance de leve.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
