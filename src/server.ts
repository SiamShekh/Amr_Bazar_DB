import app from './app'
import { _ENV } from './app/config'
const mongoose = require('mongoose')

async function main() {
  await mongoose.connect(_ENV.db_link)
  app.listen(_ENV.port, () => {
    console.log(`Example app listening on port ${_ENV.port}`)
  })
}

main()
