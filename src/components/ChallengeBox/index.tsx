import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengeContext'
import { CountdownContext } from '../../contexts/CountdownContext'
import styles from './styles.module.css'

const icons = {
  body: 'assets/body.svg',
  eye: 'assets/eye.svg',
}

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge, isUpdatingData } =
    useContext(ChallengesContext)

  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeSucceeded() {
    completeChallenge()
    resetCountdown()
  }

  function handleChallengeFailed() {
    resetChallenge()
    resetCountdown()
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <div>
            <header>Ganhe {activeChallenge.amount} xp</header>

            <main>
              <img src={icons[activeChallenge.type]} alt="Desafio" />
              <strong>Desafio</strong>
              <p>{activeChallenge.description}</p>
            </main>
          </div>
          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
              disabled={isUpdatingData}
            >
              Falhei
            </button>
            <button
              type="button"
              disabled={isUpdatingData}
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
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
