const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.use(express.static(__dirname + './public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended: false} ))
app.get('/', (req, res) => {
  res.send(`<h1>Hi. How are you?</h1>`)
})

module.exports = app
