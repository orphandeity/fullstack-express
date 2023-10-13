const authRouter = require('./auth')

module.exports = (app, passport) => {
  // Pass the express app to the routes
  authRouter(app, passport)

  app.get('/api', (req, res) => {
    res.json({ message: 'hello from the server!' })
  })

  app.get('/api/session', async (req, res, next) => {
    let n = req.session.views || 0
    req.session.views = n + 1
    res.end(`${n} views`)
  })
}
