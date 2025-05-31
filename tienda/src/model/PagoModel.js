const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    const Pago = sequelize.define("Pago", {
        idPago: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUID4,
            primaryKey: true
        },
        monto: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        metodo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        idPedido:{
            tyep: DataTypes.UUID,
            references: {
                model: "pedidos",
                key: "idPedido"
            }
        }
    },{
        timestamps: true,
        tablename: "pagos"
    });
    return Pago;
}