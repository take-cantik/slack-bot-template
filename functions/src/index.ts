import './alias'

// https

if (!process.env.FUNCTION_TARGET || process.env.FUNCTION_TARGET === 'slackBot') {
  exports.slackBot = require('./triggers/https/slack-bot')
}
