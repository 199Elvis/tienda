const DetallePedidoCrud = require();
const { numeros} = require();

exports.crear = async (data) => {
    try{
        if(!numeros(data.idPedido) && !numeros(data.idProducto) && !numeros(data.cantidad) && !numeros(data.precioUnitario) && !numeros(data.subtotal)){
            throw new Error("solo valores numericos");
        }
        const detallePedido = await DetallePedidoCrud.crear(data);
        return detallePedido;
    }catch(error){
        throw error;
    }
}
