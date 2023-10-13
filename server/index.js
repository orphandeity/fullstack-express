const express = require('express')
const app = express()

const loaders = require('./loaders')

const { PORT } = require('./config')

async function startServer() {
  await loaders(app)
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
}

startServer()
