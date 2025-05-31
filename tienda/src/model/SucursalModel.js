const { DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    const Sucursal = sequelize.define("Sucursal", {
        idSucursal: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUID4,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            alloNull: false
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefono: {
            type: DataTypes.STRING,
            alloNull: false
        }
    },{
        timestamps: true,
        tableName: "Sucursal"
    });
    return Sucursal;
}