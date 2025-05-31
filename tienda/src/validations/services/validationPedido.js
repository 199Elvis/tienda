const PedidoCrud = require();
const {fechas, numeros} = require();
exports.crear = async (data) => {
    try{
        if(!numeros(data.total)){
            throw new Error("total solo numeros");
        }
        if(!numeros(data.idSucursal)){
            throw new Error("error en la sucursal");
        }
        if(!numeros(data.idUsuario)){
            throw new Error("error en el usuario");
        }
        if(!numeros(data.idCliente)){
            throw new Error("error en el cliente");
        }
        if(!fechas(data.fecha)){
            throw new Error("error en el formato de la fecha");
        }
        const pedido = await PedidoCrud.crear(data);
        return pedido;
    }catch(error){
        throw error;
    }
}
