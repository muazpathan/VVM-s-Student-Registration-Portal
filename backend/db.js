
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('isa_3', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;