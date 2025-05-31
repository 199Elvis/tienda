const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Factura = sequelize.define("Factura", {
        idFactura: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        totalFinal: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        fechaEmision: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        nitCliente: {
            type: DataTypes.STRING,
            allowNull: false
        },
        idPedido: {
            type: DataTypes.UUID,
            references: {
                model: "pedidos",
                key: "idPedido"
            },
            allowNull: false
        }
    }, {
        timestamps: true,
        tablename: "facturas"
    });
    return Factura;
}