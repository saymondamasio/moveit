import { signIn } from 'next-auth/react'
import Head from 'next/head'
import styles from '../styles/pages/Login.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login | Move.it</title>
      </Head>
      <div>
        <img src="assets/background-login.svg" alt="" />

        <main>
          <img src="assets/logo.svg" alt="" />

          <h1>Bem-vindo</h1>
          <button
            type="button"
            onClick={() =>
              signIn('github', {
                callbackUrl: `${window.location.origin}/`,
              })
            }
          >
            <img src="assets/github.svg" alt="Github" />
            Faça login com seu Github para começar
          </button>
        </main>
      </div>
    </div>
  )
}
