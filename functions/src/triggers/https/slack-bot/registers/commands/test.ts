import { logger } from 'firebase-functions'
import { App } from '@slack/bolt'

export const registerTestCommand = (app: App) => {
  app.command('/test', async ({ ack, body, context }) => {
    await ack()

    try {
      await app.client.chat.postMessage({
        token: context.botToken,
        channel: body.channel_id,
        text: 'test'
      })
    } catch (err) {
      logger.log(err)
    }
  })
}
