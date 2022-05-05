import { App, ExpressReceiver } from '@slack/bolt'
import { registerTestCommand } from '~/triggers/https/slack-bot/registers/commands/test'
import { registerTestMessage } from '~/triggers/https/slack-bot/registers/messages/test'
import { SLACK_ACCESS_TOKEN, SLACK_SIGNING_SECRET } from '../utils/secret'

export const expressReceiver = new ExpressReceiver({
  signingSecret: SLACK_SIGNING_SECRET || '',
  endpoints: '/events',
  processBeforeResponse: true
})

export const app = new App({
  receiver: expressReceiver,
  token: SLACK_ACCESS_TOKEN || ''
})

registerTestCommand(app)
registerTestMessage(app)
