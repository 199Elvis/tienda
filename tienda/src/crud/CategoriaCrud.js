const Categoria = require();

exports.crear = async (data) => {
    try{
        const categoria = await Categoria.create({
            nombre: data.nombre,
            descripcion: data.descripcion
        });
        return categoria;
    }catch(error){
        throw new Error("Ocurrio un error al crear la categoria");
    }
}

exports.update = async (data) => {
    try{
        const categoria = await Categira.update({
            nombre: data.nombre,
            descripcion: data.descripcion
        },{
            where:{
                categoriaId: data.id
            }
        }
    )
    return categoria;
    }catch(error){
        throw new Error("Ocurrio ")
    }
}

exports.getCategorias = async () => {
    try{
        return await Categoria.findAll({
            order: [['nombre', 'ASC']]
        });
    }catch(error){
        throw new Error("No se pudo obtener las categorias");
    }
}

exports.buscarCategoria = async (idCategoria) => {
    try{
        const categoria = await Categoria.findOne({
            where: {idCategoria: idCategoria}
        })
        if(categoria){
            return true;
        }
        return false;
    }catch(error){
        throw error
    }
}