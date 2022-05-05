import { app } from '~/utils/slack'
import { logger } from 'firebase-functions'

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
