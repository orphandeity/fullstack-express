const express = require('express')
const app = express()

const { NODE_ENV, PORT } = require('./config')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

if (NODE_ENV === 'production') {
  app.use(express.static('public'))
}

app.get('/api', (req, res) => {
  res.json({ message: 'hello from the server!' })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
