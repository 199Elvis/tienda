const CategoriaCrud = require();
const {cadenas} = require();

exports.crear = async (data) => {
    try{
        if(!cadenas(data.nombre)){
            throw new Error("el nombre solo puede contener texto");
        }
        if(!cadenas(data.descripcion)){
            throw new Error("la descripcion solo puede contener texto");
        }
        return await CategoriaCrud.crear(data);
    }catch(error){
        throw error;
    }
}
exports.actualizar = async (data) => {
    try{
        if(!cadenas(data.nombre)){
            throw new Error("el nombre solo puede contener texto");
        }
        if(!cadenas(data.descripcion)){
            throw new Error("la descripcion solo puede contener texto");
        }
        return await CategoriaCrud.actualizar(data);
    }catch(error){
        throw error;
    }
}
exports.getCategorias = async () => {
    try {
        return await CategoriaCrud.getCategorias();
    } catch (error) {
        throw error;
    }
}