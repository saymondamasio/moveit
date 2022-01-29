import styles from './styles.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/saymondamasio.png" alt="Saymon Damásio" />

      <div>
        <strong>Saymon Damásio</strong>
        <p>
          <img src="assets/level.svg" alt="" />
          Level 1
        </p>
      </div>
    </div>
  )
}
