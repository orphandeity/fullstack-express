const { validationResult } = require('express-validator')

function authenticate(req, res, next) {
  if (req.isAuthenticated()) return next()
  else res.status(401).end()
}

function validate(req, res, next) {
  let errors = validationResult(req)
  if (errors.isEmpty()) return next()
  else res.status(422).json({ errors: errors.array() })
}

module.exports = {
  authenticate,
  validate,
}
