import { App, ExpressReceiver } from '@slack/bolt'
import { logger } from 'firebase-functions/v1'
import { SLACK_ACCESS_TOKEN, SLACK_SIGNIN_SECRET } from './secret'

export const expressReceiver = new ExpressReceiver({
  signingSecret: SLACK_SIGNIN_SECRET,
  endpoints: '/events',
  processBeforeResponse: true
})

const app = new App({
  receiver: expressReceiver,
  token: SLACK_ACCESS_TOKEN
})

// test

const useTest = (app: App) => {
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

useTest(app)
