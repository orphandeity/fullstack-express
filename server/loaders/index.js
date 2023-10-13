const expressLoader = require('./express')
const passportLoader = require('./passport')
const routeLoader = require('../routes')

module.exports = async (app) => {
  // express middleware
  let expressApp = await expressLoader(app)

  // passport
  let passport = await passportLoader(expressApp)

  // routers
  await routeLoader(app, passport)

  // catch all
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
  })

  // error handling
  app.use(function (err, erq, res, next) {
    let { message } = err
    return res.status(500).json({ message })
  })
}
