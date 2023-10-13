const express = require('express')
const router = express.Router()
const { authenticate, validate } = require('../middleware')

const AuthService = require('../services/auth')

module.exports = (app, passport) => {
  app.use('/api/auth', router)

  router.post('/register', async (req, res, next) => {
    try {
      let user = await AuthService.registerUser(req.body)
      req.login(user, (err) => {
        if (err) return next(err)
        return res.status(200).json(user)
      })
    } catch (err) {
      next(err)
    }
  })

  router.post(
    '/login',
    passport.authenticate('local', {
      successMessage: true,
      failureMessage: true,
    }),
    (req, res, next) => {
      res.status(200).json(req.user)
    }
  )

  router.post('/logout', [authenticate], (req, res, next) => {
    req.logout((err) => {
      if (err) return next(err)
      return res
        .status(200)
        .json({ status: 'success', message: 'User logged out' })
    })
  })

  router.get('/session', (req, res, next) => {
    return res.status(200).json(req.user ?? null)
  })
}
