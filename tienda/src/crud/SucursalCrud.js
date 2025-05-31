const Sucursal = require();

exports.crear = async (data) => {
    try{
        const sucursal = await Sucursal.create({
            nombre: data.nombre,
            direccion: data.direccion,
            telefono: data.telefono
        });
        return sucursal;
    }catch(error){
        throw error;
    }
}
exports.actualizar = async (data) => {
    try {
        const sucursal = await Sucursal.update(
            {
                nombre: data.nombre,
                direccion: data.direccion,
                telefono: data.telefono
            },
            {
                where: { idSucursal: data.id }
            }
        )
        return sucursal;
    } catch (error) {
        throw error;
    }
}
exports.getSucursal = async () => {
    try{
        const sucursal = await Sucursal.findOne();
        return sucursal;
    }catch(error){
        throw error;
    }
}