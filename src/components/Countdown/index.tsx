import { useContext } from 'react'
import Close from '../../../public/assets/close.svg'
import { CountdownContext } from '../../contexts/CountdownContext'
import styles from './styles.module.css'

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown,
    totalTimeInMinutes,
  } = useContext(CountdownContext)
  const timeInSecondsActual = totalTimeInMinutes * 60 - (minutes * 60 + seconds)

  const percentProgressActual =
    (timeInSecondsActual * 100) / (totalTimeInMinutes * 60)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
          <img src="assets/check_circle.svg" alt="" />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
              <Close />
              <div className={styles.progress}>
                <div style={{ width: `${percentProgressActual}%` }} />
              </div>
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
              <img src="assets/play_arrow.svg" alt="" />
            </button>
          )}
        </>
      )}
    </div>
  )
}
