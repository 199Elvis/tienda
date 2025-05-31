const PagoCrud = require();
const {fechas, numeros, cadenas} = require();

exports.crear = async (data) => {
    try{
        if(!numeros(data.monto)){
            throw new Error("ocurrio un error");
        }
        if(!cadenas(data.metodo)){
            throw new Error("metodo de pago incorrecto");
        }
        if(!fechas(data.fecha)){
            throw new Error("fecha incorrecta");
        }
        const pago = await PagoCrud.crear(data);
        return pago;
    }catch(error){
        throw error;
    }
}

exports.actualizar = async (data) => {
    try {
        if(!numeros(data.idPedido)){
            throw new Error("pedido no valido");
        }
        if(!numeros(data.idPago)){
            throw new Error("pago no valido")
        }
        const pago = await PagoCrud.actualizar(data);
        return pago;
    } catch (error) {
        throw error;
    }
}