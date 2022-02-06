import fs from 'fs'
import handlebars from 'handlebars'
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import { getScreenshot } from './_lib/chromium'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const query = request.query

  if (query.thumbnail === 'thumbnail.png') {
    try {
      const level = Number(query.level)
      const challenges = Number(query.challenges)
      const experience = Number(query.experience)

      if (!level || !challenges || !experience) {
        throw new Error(
          `${level}${challenges}${experience} Missing informations`
        )
      }

      const filePath = path.join(
        process.cwd(),
        'src',
        'templates',
        'thumbnail.hbs'
      )

      const template = fs.readFileSync(filePath, 'utf8')

      const content = handlebars.compile(template)({
        base_url: process.env.NEXT_PUBLIC_APP_URL,
        level,
        challenges,
        experience,
      })

      const file = await getScreenshot(content)

      response.statusCode = 200

      response.setHeader('Content-Type', `image/png`)
      response.setHeader(
        'Cache-Control',
        'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
      )

      response.end(file)
    } catch (e) {
      response.statusCode = 500
      response.setHeader('Content-Type', 'text/html')
      response.end(`<h1>Internal Error</h1><p>${e}</p>`)
      console.error(e)
    }
  }
}
