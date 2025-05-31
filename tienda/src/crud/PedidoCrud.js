const Pedido = require();

exports.crear = async (data) => {
    try{
        const pedido = await Pedido.create({
            fecha: data.fecha,
            estado: "pendiente",
            total: data.total,
            idSucursal: data.idSucursal,
            idUsuario: data.idUsuario,
            idCliente: data.idCliente
        });
        return pedido;
    }catch(error){
        throw new Error("fallo la creacion del pedido");
    }
}

exports.actualizarEstado = async (data) => {
    try{
        const pedido = await Pedido.update({
            estado: data.estado
        },{
            where: {idPedido: data.idPedido}
        })
        return pedido;
    }catch(error){
        throw new Error("fallo al actualizar del pedido");
    }
}

exports.getPedidos = async () => {
    try{

    }catch(error){
        throw new Error("no se pudo obtener los pedidos");
    }
}