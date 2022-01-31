import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { ChallengesProvider } from '../contexts/ChallengeContext'
import '../styles/global.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ChallengesProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ChallengesProvider>
  )
}

export default MyApp
