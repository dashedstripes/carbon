const Sequelize = require('sequelize')
const sequelize = new Sequelize('todo', 'adam', '', {
  dialect: 'postgresql'
})

module.exports = sequelize