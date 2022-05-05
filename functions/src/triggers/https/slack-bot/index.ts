import { region, RuntimeOptions } from 'firebase-functions'
import { expressReceiver } from '~/external/slack'

// *************
// Functions設定

const runtimeOpts: RuntimeOptions = {
  timeoutSeconds: 540,
  memory: '1GB'
}

module.exports = region('asia-northeast1').runWith(runtimeOpts).https.onRequest(expressReceiver.app)
