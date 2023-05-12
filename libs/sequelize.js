const { Sequelize } = require('sequelize')

const setupModels = require('./../db/models')

const { config } = require('../config/config')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URL = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.db_Port}/${config.dbName}`

const sequelize = new Sequelize( URL, {
  dialect: 'postgres',
  logging: true
})


setupModels(sequelize)




module.exports = sequelize
