const express = require('express')

const bodyParser = require('body-parser')

const app = express()

const { setup } = require('./src/common/db')

const routes = [
  require('./src/routes/fetch.video.track.route'),
  require('./src/routes/create.video.track.route'),
  require('./src/routes/search.video.track.route'),
  require('./src/routes/remove.video.track.route')
]

const { sequelize, models } = setup()

const attachModels = (req, res, next) => {
  req.models = models
  next()
}

app.use(attachModels)

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to the challenge')
})

routes.forEach((route) => route({ app }))

sequelize.sync()

if (process.env.NODE_ENV !== 'test') {
  app.listen(8089, () => {
    console.log('Server is running on 8089!')
  })
}

module.exports = {
  app,
  models
}
