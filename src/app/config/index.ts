import env from 'dotenv'
import path from 'path'

env.config({ path: path.join((process.cwd, '.env')) })

export const _ENV = {
  port: process.env.PORT,
  db_link: process.env.DB_LINK,
}
