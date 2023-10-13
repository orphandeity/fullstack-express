const passport = require('passport')
const LocalStrategy = require('passport-local')
const bcrypt = require('bcrypt')

const AuthService = require('../services/auth')

module.exports = (app) => {
  app.use(passport.initialize())
  app.use(passport.session())

  // set method to serialize data to store in cookies
  passport.serializeUser((user, done) => {
    done(null, user)
  })

  // set method to deserialize data stored in cookies and attach to req.user
  passport.deserializeUser((user, done) => {
    done(null, { id: user.id, username: user.username })
  })

  // use local strategy
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      return await AuthService.login({ username, password, done })
    })
  )

  return passport
}
