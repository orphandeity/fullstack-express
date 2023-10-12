const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api', (req, res) => {
  res.send('hello from the server!')
})

app.listen(2300, () => console.log('Server is running on port 2300'))
