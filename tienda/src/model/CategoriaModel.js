const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    const Categoria = sequelize.define("Categoria", {
        idCategoria: {
            type: DataTypes.UUID,
            defaulValue: DataTypes.UUID4,
            primarykey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        descripcion: {
            type: DataTypes.STRING,
        }
    },{
        timestamps: true,
        tablename: "Categorias"
    });
    return Categoria;
}