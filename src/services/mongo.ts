import { Db, MongoClient } from 'mongodb'

let cachedDb: Db

export async function connectDatabase(url: string) {
  if (cachedDb) {
    return cachedDb
  }

  const client = await MongoClient.connect(url)

  const db = client.db('moveit')

  cachedDb = db

  return db
}
