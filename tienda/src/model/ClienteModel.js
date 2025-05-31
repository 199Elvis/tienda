const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    const Cliente = sequelize.define("Cliente", {
        idCliente: {
            type: DataTypes.UUID,
            defaulValue: DataTypes.UUID4,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ci: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: true,
        tablename: "Clientes"
    });
    return Clientes;
}