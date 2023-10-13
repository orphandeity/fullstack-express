const express = require('express')
const session = require('express-session')
const knex = require('./db')
const KnexSessionStore = require('connect-session-knex')(session)

const { NODE_ENV, PORT, SESSION_SECRET } = require('./config')

const app = express()

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

app.get('/api', (req, res) => {
  res.json({ message: 'hello from the server!' })
})

app.get('/api/session', async (req, res, next) => {
  let n = req.session.views || 0
  req.session.views = n + 1
  res.end(`${n} views`)
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
