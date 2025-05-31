const Producto = require();

exports.crear = async (data) => {
    try {
        const producto = await Producto.create({
            nombre: data.nombre,
            descripcion: data.descripcion,
            precio: data.precio,
            stock: data.stock,
            estado: data.estado,
            idCategoria: data.idCategoria
        })
        return producto;
    } catch (error) {
        throw error;
    }
}
exports.actualizar = async (data) => {
    try{
        const producto = await Producto.update({
            nombre: data.nombre,
            descripcion: data.descripcion,
            precio: data.precio,
            stock: data.stock,
            estado: data.estado,
            idCategoria: data.idCategoria
        },{
            where: { idProducto: data.idProducto}
        });
        return producto;
    }catch(error){
        throw error;
    }
}
exports.actualizarStock = async (data) => {
    try{
        const producto = await Producto.update({
            stock: data.stock
        },
        {
            where: { idProducto: data.id}
        });
        return producto;
    }catch(error){
        throw error;
    }
}
exports.getProductos = async () => {
    try{
        return await Producto.findAll({
            order: [['nombre', 'ASC']]
        });
    }catch(error){
        throw error;
    }
}
exports.buscarProducto = async (id) => {
    try{
        const producto = await Producto.findOne({
            where: { idProducto: id},
            attributes: [stock, estado]
        })
        return producto;
    }catch(error){
        throw error;
    }
}