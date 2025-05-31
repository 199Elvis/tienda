const Pago = require();

exports.crear = async (data) => {
    try{
        const pago = await Pago.create({
            monto: data.monto,
            fecha: data.fecha,
            metodo: data.metodo
        })
        return pago;
    }catch(error){
        throw error;
    }
}
exports.actualizar = async (data) => {
    try{
        const pago = await Pago.update({
            idPedido: data.idPedido
        }, {
            where: {idPago: data.idPago}
        })
        return pago;
    }catch(error){
        throw error;
    }
}