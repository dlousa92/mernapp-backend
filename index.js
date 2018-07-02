const express = require('express')
const parser = require('body-parser')
const mongoose = require('./db/schema')
const cors = require('cors')

const app = express()

app.use(parser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(8000, () => {
  console.log('Ready for lift off on port 8000')
})
