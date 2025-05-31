const Factura = require();

exports.crear = async (data) => {
    try{
        const factura = await Factura.create({
            idPedido: data.idPedido,
            numeroFactura: data.numeroFactura,
            totalFinal: data.totalFinal,
            fechaEmision: data.fechaEmision
        })
        return factura;
    }catch(error){
        throw error;
    }
}