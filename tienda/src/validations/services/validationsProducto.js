const ProductoCrud = require();
const {cadenas, numeros} = require();
const CategoriaCrud = require();

exports.crear = async(data) => {
    try{
        if(!cadenas(data.nombre)){
            throw new Error("el nombre solo puede contener letras");
        }
        if(!cadenas(data.descripcion)){
            throw new Error("la descripcion solo puede contener letras");
        }
        if(!numeros(data.precio)){
            throw new Error("el precio solo puede contener numeros validos");
        }
        if(!numeros(data.stock)){
            throw new Error("el stock solo puede contener numeros validos");
        }
        if(!numeros(data.idCategoria) || !CategoriaCrud.buscarCategoria(data.idCategoria)){
            throw new Error("referencia no valida de la categoria");
        }
        if(!cadenas(data.estado)){
            throw new Error("el estado solo puede contener letras");
        }
        return await ProductoCrud.crear(data);
    }catch(error){
        throw error;
    }
}
exports.actualizar = async (data) => {
    try{
        if(!cadenas(data.nombre)){
            throw new Error("el nombre solo puede contener letras");
        }
        if(!cadenas(data.descripcion)){
            throw new Error("la descripcion solo puede contener letras");
        }
        if(!numeros(data.precio)){
            throw new Error("el precio solo puede contener numeros validos");
        }
        if(!numeros(data.stock)){
            throw new Error("el stock solo puede contener numeros validos");
        }
        if(!numeros(data.idCategoria) || !CategoriaCrud.buscarCategoria(data.idCategoria)){
            throw new Error("referencia no valida de la categoria");
        }
        if(!cadenas(data.estado)){
            throw new Error("el estado solo puede contener letras");
        }
        if(!numeros(data.idProducto)){
            throw new Error("referencia no valida para el producto");
        }
        return await ProductoCrud.actualizar(data);
    }catch(error){
        throw error;
    }
}
exports.getProductos = async () => {
    try{
        return await ProductoCrud.getProductos();
    }catch(error){
        throw error;
    }
}
exports.cambiarStock = async (data) =>{
    try{
        const stockActual = await ProductoCrud.buscarProducto(data.idProducto);
        if(!stockActual){
            throw new Error("ocurrio un error al realizar el pedido");
        }
        const datos = {
            idProducto: data.idProducto,
            stock: stockActual.stock - data.cantidad
        }
        return ProductoCrud.actualizarStock(datos);
    }catch(error){
        throw error;
    }
}