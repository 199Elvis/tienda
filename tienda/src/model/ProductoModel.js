const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Producto = sequelize.define("Producto", {
        idProducto: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUID4,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING
        },
        precio: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false
        },
        idCategoria: {
            type: DataTypes.UUID,
            references: {
                model: "Categorias",
                key: "idCategoria"
            },
            allowNull: false
        }
    }, {
        timestamps: true,
        tablename: "productos"
    });
    return Producto;
}