const { DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    const Pedido = sequelize.define("Pedido", {
        idPedido: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUID4,
            primaryKey: true
        },
        total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false
        },
        idSucursal: {
            type: DataTypes.UUID,
            references: {
                model: "sucursal",
                key: "idSucursal"
            },
            allowNull: false
        },
        idUsuario: {
            type: DataTypes.UUID,
            references: {
                model: "usuarios",
                KEY: "idUsuario"
            },
            allowNull: false
        },
        idCliente: {
            type: DataTypes.UUID,
            references: {
                model: "clientes",
                KEY: "idCliente"
            },
            allowNull: false
        }
    },{
        timestamps: true,
        tablename: "pedidos"
    });
    return Pedido;
}