const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('nombre_bd', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;