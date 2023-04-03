// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT

const express = require('express')
const app = express()

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
})

const breadsControllers = require('./controllers/breads_controller.js')
app.use('/breads', breadsControllers)

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
