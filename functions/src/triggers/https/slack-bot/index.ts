// import express from 'express'
import { region, RuntimeOptions } from 'firebase-functions'
import { expressReceiver } from '~/utils/slack'
// import { handlers } from './handlers'

// const app = express()

// app.post('/events', (req, res) => {
//   Promise.all(req.body.events.map(handlers))
//     .then((result) => {
//       logger.info(result)
//       res.status(200).end()
//     })
//     .catch((err) => {
//       logger.error(err)
//       res.status(500).end()
//     })
// })

// *************
// Functions設定

const runtimeOpts: RuntimeOptions = {
  timeoutSeconds: 540,
  memory: '1GB'
}

module.exports = region('asia-northeast1').runWith(runtimeOpts).https.onRequest(expressReceiver.app)
