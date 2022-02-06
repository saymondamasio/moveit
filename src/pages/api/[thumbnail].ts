import { NextApiRequest, NextApiResponse } from 'next'
import { getScreenshot } from './_lib/chromium'
import { getHtml } from './_lib/thumbnailTemplate'

const isDev = !process.env.AWS_REGION
const isHtmlDebug = process.env.OG_HTML_DEBUG === '1'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const query = request.query

  if (query.thumbnail === 'thumbnail.png') {
    console.log('image')

    try {
      const level = Number(query.level)
      const challenges = Number(query.challenges)
      const experience = Number(query.experience)

      if (!level || !challenges || !experience) {
        throw new Error(
          `${level}${challenges}${experience} Missing informations`
        )
      }

      const html = getHtml({ level, challenges, experience })

      if (isHtmlDebug) {
        response.setHeader('Content-Type', 'text/html')
        response.end(html)

        return
      }

      const file = await getScreenshot(html, isDev)

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
      console.log(isDev)
    }
  }
  if (query.thumbnail === 'thumbnail') {
    console.log('api')

    try {
      const level = Number(query.level)
      const challenges = Number(query.challenges)
      const experience = Number(query.experience)

      if (!level || !challenges || !experience) {
        throw new Error('Missing informations')
      }

      const html = getHtml({ level, challenges, experience })

      if (isHtmlDebug) {
        response.setHeader('Content-Type', 'text/html')
        response.end(html)

        return
      }

      response.setHeader('Content-Type', 'text/html')
      return response.end(html)
    } catch (e) {
      response.statusCode = 500
      response.setHeader('Content-Type', 'text/html')
      response.end(`<h1>Internal Error</h1><p>${e}</p>`)
      console.error(e)
      console.log(isDev)
    }
  }
}
