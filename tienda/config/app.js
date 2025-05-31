const sequelize = require("database");

sequelize.authenticate()
  .then(() => console.log('Conexión a la BD exitosa'))
  .catch(err => console.error('Error al conectar a la BD:', err));

sequelize.sync({ force: false })
  .then(() => console.log('Modelos sincronizados'))
  .catch(err => console.error('Error al sincronizar:', err));