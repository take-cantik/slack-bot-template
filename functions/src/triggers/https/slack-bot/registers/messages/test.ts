import { App } from '@slack/bolt'
import { logger } from 'firebase-functions/v1'

export const registerTestMessage = (app: App) => {
  app.message('ahiahi', async ({ say }) => {
    try {
      await say('Hello')
    } catch (err) {
      logger.log(err)
    }
  })
}
