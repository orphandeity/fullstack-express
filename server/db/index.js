const { DB } = require('../config')

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: DB.PGHOST,
    port: DB.PGPORT,
    user: DB.PGUSER,
    password: DB.PGPASSWORD,
    database: DB.PGDATABASE,
  },
  pool: { min: 0, max: 7 },
})

module.exports = knex
