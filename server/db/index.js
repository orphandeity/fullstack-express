const { DB, NODE_ENV } = require('../config')

const knex = require('knex')({
  client: 'pg',
  connection: NODE_ENV === 'development' ? DB : process.env.DATABASE_URL,
  pool: { min: 0, max: 7 },
})

module.exports = knex
