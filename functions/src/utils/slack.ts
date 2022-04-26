import { WebClient } from '@slack/web-api'
import { SLACK_ACCESS_TOKEN } from './secret'

export const slackWebClient = new WebClient(SLACK_ACCESS_TOKEN)
