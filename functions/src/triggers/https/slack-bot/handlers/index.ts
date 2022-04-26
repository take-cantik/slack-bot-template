import { slackWebClient } from '~/utils/slack'

export const handlers = async () => {
  await slackWebClient.chat.postMessage({ channel: process.env.CHANNEL_ID as string, text: 'Hello there' })
}
