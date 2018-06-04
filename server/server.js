const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended: false} ))
app.get('/', (req, res) => {
  res.sendFile('./index.html')
})

module.exports = app
