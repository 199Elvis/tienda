const ValidationProducto = require();

exports.crear = async (data) => {
    try{
        return await ValidationProducto.crear(data);
    }catch(error){
        throw error;
    }
}

exports.actualizarProdcuto = async (data) => {
    try{
        return await ValidationProducto.actualizar(data)
    }catch(error){
        throw error;
    }
}

exports.getProductos = async () => {
    try{
        return await ValidationProducto.getProductos();
    }catch(error){
        throw error;
    }
}