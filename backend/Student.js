// student schema model
const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rollNo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cgpa: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = Student;