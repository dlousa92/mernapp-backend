const express = require('express')
const parser = require('body-parser')
const mongoose = require('./db/Hero')
const cors = require('cors')
const Hero = mongoose.model('Hero')

const app = express()

app.set('port', process.env.PORT || 3000)
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

app.post('/api/heroes', (req, res) => {
  Hero.create(req.body)
    .then((hero) => {
      res.json(hero)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.get('/api/heroes/:id', (req, res) => {
  Hero.findById(req.params.id)
    .then((hero) => {
      res.json(hero)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.delete('api/heroes/:id', (req, res) => {
  Hero.findByIdAndRemove(req.params.id)
})

app.listen(8000, () => {
  console.log('Ready for lift off on port 8000')
})
