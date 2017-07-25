const config = require('./config/config.json')[process.env.NODE_ENV]
const Sequelize = require('sequelize')
const sequelize = new Sequelize(config.database, config.username, config.password, {
  dialect: config.dialect
})

module.exports = sequelize