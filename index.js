const express = require('express')
const parser = require('body-parser')
const mongoose = require('./db/schema')
const cors = require('cors')
const Hero = mongoose.model('Hero')

const app = express()

app.use(parser.json())
app.use(cors())

app.get('/api/heroes', (req, res) => {
  Hero.find()
    .then((heroes) => {
      res.json(heroes)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.listen(8000, () => {
  console.log('Ready for lift off on port 8000')
})
