const mongoose = require('./connection.js')

const Hero = new mongoose.Schema({
  name: String,
  superPower: String
})

mongoose.model('Hero', Hero)

module.exports = mongoose
