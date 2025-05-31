const { DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    const DetallePedido = sequelize.define("DetallePedido", {
        idDetallePedido:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        precioUnitario: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        subTotal: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        idPedido: {
            type: DataTypes.UUID,
            references: {
                model: "pedidos",
                key: "idPedido"
            },
            allowNull: false
        },
        idProducto: {
            type: DataTypes.UUID,
            references: {
                model: "productos",
                key: "idProducto"
            },
            allowNull: false
        }
    }, {
        timestamps: true,
        tablename: "detallePedido"
    });
    return DetallePedido;
}