import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { ChallengesProvider } from '../contexts/ChallengeContext'
import { ThemeProvider } from '../contexts/ThemeContext'
import '../styles/global.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider>
      <ChallengesProvider>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ChallengesProvider>
    </ThemeProvider>
  )
}

export default MyApp
