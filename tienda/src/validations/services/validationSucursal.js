const {cadenas, numeros} = require();

exports.validarDatosSucursal = async (data) => {
    try{
        if(!cadenas(data.nombre)){
            throw new Error("solo texto");
        }
        if(!numeros(data.telefono)){
            throw new Error("Solo numeros");
        }
        return true
    }catch(error){
        throw error;
    }
}

