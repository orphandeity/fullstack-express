const express = require('express')
const app = express()

const { PORT } = './config'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api', (req, res) => {
  res.json({ message: 'hello from the server!' })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
