import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { connectDatabase } from '../../../services/mongo'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'read:user',
        },
      },
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      const { email, name, image } = user

      try {
        const db = await connectDatabase(process.env.MONGODB_URL!)
        const collection = db.collection('users')

        const userExists = await collection.findOne({ email })
        if (!userExists) {
          await collection.insertOne({ email, name, image })
        }

        return true
      } catch (error) {
        console.log('Error in MongoDB: ' + error)

        return '/unauthorized'
      }
    },
  },
})
