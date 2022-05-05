import { App, ExpressReceiver } from '@slack/bolt'
import { useTest } from '~/triggers/https/slack-bot/handlers/command'
import { SLACK_ACCESS_TOKEN, SLACK_SIGNIN_SECRET } from './secret'

export const expressReceiver = new ExpressReceiver({
  signingSecret: SLACK_SIGNIN_SECRET || '',
  endpoints: '/events',
  processBeforeResponse: true
})

export const app = new App({
  receiver: expressReceiver,
  token: SLACK_ACCESS_TOKEN || ''
})

useTest(app)
