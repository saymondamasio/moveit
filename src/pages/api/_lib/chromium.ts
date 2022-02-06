import chromium from 'chrome-aws-lambda'
import puppeteer, { Page } from 'puppeteer'

let _page: Page | null

async function getPage(): Promise<Page> {
  if (_page) {
    return _page
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
  })

  _page = await browser.newPage()

  return _page
}

export async function getScreenshot(html: string): Promise<Buffer | string> {
  const page = await getPage()

  await page.setViewport({ width: 1200, height: 630 })
  await page.setContent(html)
  await page.evaluateHandle('document.fonts.ready')

  const file = await page.screenshot({ type: 'png' })

  return file
}
