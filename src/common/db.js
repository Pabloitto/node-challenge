const fs = require('fs')

const path = require('path')

const Sequelize = require('sequelize')

const config = require('./config')

const loadModels = (sequelize) => {
  const root = path.join(__dirname, '..', 'models')
  const models = fs.readdirSync(root).reduce((models, file) => {
    const modelDir = path.join(root, file)
    const model = sequelize.import(modelDir)
    models[model.name] = model
    return models
  }, {})
  return models
}

const setup = () => {
  const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config.params
  )
  const models = loadModels(sequelize)
  return {
    sequelize,
    models
  }
}

module.exports = {
  setup
}
