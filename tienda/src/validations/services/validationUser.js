const User = require();
const {cadenas, correo, numeros, contrasenia, fechas} = require();


exports.buscarCrear = async(data) => {
    try{
        if(!cadenas(data.nombre)){
            throw new Error('Nombre no válido');
        }
        if(!cadenas(data.cargo)){
            throw new Error("Cargo no valido");
        }
        if(!correo(data.correo)){
            throw new Error("Email no valido");
        }
        if(!numeros(data.ci)){
            throw new Error("Ci no valido");
        }
        if(!contrasenia(data.contrasenia)){
            throw new Error("Contrasenia no valida");
        }
        if(!fechas(data.fechaRegistro)){
            throw new Error("Fecha no valida");
        }
        const existe = await User.findOne({ 
            where: { 
                [Op.or]: [
                    { usuario: data.usuario },
                    { correo: data.correo },
                    { ci: data.ci }
                ]
            } 
         });
        return !!existe;
    }catch(error){
        throw error;
    }
}
exports.buscarActualizar = async(id) => {
    try{
        const usuario = await User.findOne({
            where: {
                usuarioId: id
            }
        });
        return usuario;
    }catch (error) {
        throw new Error(`Error al actualizar usuario: ${error.message}`);
    }
}
exports.buscarUsuarios = async(data, caracteristica) => {
    try{
        const value = await User.findAll({
            where: {
                [caracteristica]: data
            }
        })
        return value;
    }catch(error){
        throw new Error(`Error al buscar: ${error.message}`);
    }
}