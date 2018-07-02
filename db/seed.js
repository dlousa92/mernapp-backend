const mongoose = require('./schema.js')
const Hero = mongoose.model('Hero')
const superheroData = require('./superhero-data.json')

Hero.remove({})
  .then(() => {
    Hero.collection.insert(superheroData)
      .then((heroes) => {
        console.log(heroes)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })
