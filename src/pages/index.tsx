import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { ChallengeBox } from '../components/ChallengeBox'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { SideBar } from '../components/SideBar'
import { CountdownProvider } from '../contexts/CountdownContext'
import styles from '../styles/pages/Home.module.css'
import { withSSRAuth } from '../utils/withSSRAuth'

const Home: NextPage = () => {
  return (
    <div className="container-dashboard">
      <SideBar />

      <div className={styles.container}>
        <Head>
          <title>Início | Move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = withSSRAuth(async ctx => {
  return {
    props: {},
  }
})
