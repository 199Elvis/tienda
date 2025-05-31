const FacturaCrud = require();
const {fechas, numeros} = require();

exports.crear = async (data) => {
    try{
        if(!numeros(data.idPedido)){
            throw new Error();
        }
        if(!numeros(data.totalFinal)){
            throw new Error();
        }
        if(!fechas(data.fechaEmision)){
            throw new Error();
        }
        const factura = await FacturaCrud.crear(data);
        return factura;
    }catch(error){
        throw error;
    }
}