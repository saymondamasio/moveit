import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Up from '../../public/assets/up.svg'
import { SideBar } from '../components/SideBar'
import { connectDatabase } from '../services/mongo'
import styles from '../styles/pages/LeaderBoard.module.css'
import { withSSRAuth } from '../utils/withSSRAuth'

type User = {
  email: string
  name: string
  image: string
  challengesCompleted: number
  currentExperience: number
  level: number
  totalExperience: number
}

interface Props {
  users: User[]
}

const LeaderBoard: NextPage<Props> = ({ users }) => {
  console.log(users)

  return (
    <div className="container-dashboard">
      <SideBar />

      <div className={styles.container}>
        <Head>
          <title>LeaderBoard | Move.it</title>
        </Head>

        <h1>LeaderBoard</h1>

        <table>
          <thead>
            <tr>
              <th className={styles.position}>Posição</th>
              <th className={styles.user}>Usuário</th>
              <th className={styles.challenges}>Desafios</th>
              <th className={styles.experience}>Experiência</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.email}>
                <td className={styles.position}>{index + 1}</td>
                <td className={styles.user}>
                  <div>
                    <img
                      className={styles.avatar}
                      src="https://github.com/saymondamasio.png"
                      alt="Saymon Damásio"
                    />

                    <div>
                      <strong>{user.name}</strong>
                      <span>
                        <Up />
                        Level {user.level}
                      </span>
                    </div>
                  </div>
                </td>
                <td className={styles.challenges}>
                  <span>{user.challengesCompleted}</span> completados
                </td>
                <td className={styles.experience}>
                  <span>{user.totalExperience}</span>
                  &nbsp;xp
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LeaderBoard

export const getServerSideProps: GetServerSideProps = withSSRAuth(async ctx => {
  const db = await connectDatabase(process.env.MONGODB_URL!)
  const collection = db.collection('users')

  const users = await collection.find().sort({ totalExperience: 1 }).toArray()

  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  }
})
