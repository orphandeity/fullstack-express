const express = require('express')
const session = require('express-session')
const KnexSessionStore = require('connect-session-knex')(session)

const knex = require('../db')

const { NODE_ENV, SESSION_SECRET } = require('../config')

module.exports = (app) => {
  if (NODE_ENV === 'production') {
    app.use(express.static('public'))
  }

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use(
    session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 1000 * 60 * 60 },
      store: new KnexSessionStore({
        knex,
        createtable: true,
        clearInterval: 1000 * 60 * 60,
      }),
    })
  )

  return app
}
