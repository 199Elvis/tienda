const ValidationCategoria = require();

exports.crear = async (data) => {
    try{
        return await ValidationCategoria.crear(data);
    }catch(error){
        throw error;
    }
}
exports.actualizar = async (data) => {
    try{
        return await ValidationCategoria.actualizar(data);
    }catch(error){
        throw error;
    }
}
exports.getCategorias = async () => {
    try{
        return await ValidationCategoria.getCategorias();
    }catch(error){
        throw error;
    }
}