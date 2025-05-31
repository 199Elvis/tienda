const DetallePedido = require();

exports.crear = async (data) => {
    try{
        const detallePedido = await DetallePedido.create({
            idPedido: data.idPedido,
            idProducto: data.idProducto,
            cantidad: data.camtidad,
            precioUnitario: data.precioUnitario,
            subtotal: data.subtotal
        });
        return detallePedido;
    }catch(error){
        throw error;
    }
}