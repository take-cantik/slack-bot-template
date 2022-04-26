import express from 'express'
import { logger, region, RuntimeOptions } from 'firebase-functions'

const app = express()

app.post('/', (req, res) => {
  logger.log('test')
})

// *************
// Functions設定

const runtimeOpts: RuntimeOptions = {
  timeoutSeconds: 540,
  memory: '1GB'
}

module.exports = region('asia-northeast1').runWith(runtimeOpts).https.onRequest(app)
