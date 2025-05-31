const validationUser = require();
const UserCrud = require();

exports.crear = async (data) => {
    try {
        const existe = validationUser.buscarCrear(data);
        if(existe){
            throw new Error("el usuario ya existe");
        }
        return await UserCrud.crear(data);
    } catch (error) {
        throw error;
    }
}
exports.actualizar = async (data) => {
    try {
        const existe = await validationUser.buscarActualizar(data.id);
        if (!existe) {
            throw new Error("El usuario no existe");
        }
        if (data.ci !== undefined && data.ci !== existe.ci) {
            const ciExistente = await validationUser.buscarUsuarios(data.ci, "ci");
            if (ciExistente.length > 0) {
                throw new Error("El CI proporcionado ya está registrado por otro usuario.");
            }
        }
        if (data.email !== undefined && data.email !== existe.email) {
            const mailExistente = await validationUser.buscarUsuarios(data.email, "email");
            if (mailExistente.length > 0) {
                throw new Error("El email proporcionado ya está registrado por otro usuario.");
            }
        }
        if (data.usuario !== undefined && data.usuario !== existe.usuario) {
            const usernameExistente = await validationUser.buscarUsuarios(data.usuario, "usuario");
            if (usernameExistente.length > 0) {
                throw new Error("El nombre de usuario proporcionado ya está en uso.");
            }
        }
        const usuarioActualizado = await UserCrud.actualizarUsuario(data);
        return usuarioActualizado;
    } catch (error) {
        throw error;
    }
};
exports.getUsuario = async () =>{
    try{
        return UserCrud.getUsuarios();
    }catch(error){
        throw error;
    }
}