import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { connectDatabase } from '../../services/mongo'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const session = await getSession({ req: request })
  if (!session?.user?.email) {
    return response.status(401).json({
      message: 'You not authorized',
    })
  }
  const { name, email, image } = session.user
  if (request.method === 'GET') {
    //pegando as informações do usuario logado

    //pega o usuario salvo no banco

    try {
      const db = await connectDatabase(process.env.MONGODB_URL!)
      const users = db.collection('users')
      const profile = await users.findOne({ name, email, image })
      return response.status(200).json(profile)
    } catch (error) {
      console.log(error)

      response.status(500).end('Error connecting to database')
    }
  } else if (request.method === 'PUT') {
    //pegando as informações do usuario logado

    //pega o usuario salvo no banco

    try {
      const { level, currentExperience, challengesCompleted, totalExperience } =
        request.body

      const db = await connectDatabase(process.env.MONGODB_URL!)
      const users = db.collection('users')
      const profile = await users.updateOne(
        { email: session?.user?.email },
        {
          $set: {
            name,
            email,
            image,
            currentExperience,
            level,
            challengesCompleted,
            totalExperience,
          },
        }
      )
      return response.status(200).json(profile)
    } catch (error) {
      console.log(error)

      response.status(500).end('Error connecting to database')
    }
  } else {
    response.setHeader('Allow', 'GET, PUT')
    response.status(405).end(`Method ${request.method} Not Allowed`)
  }
}
