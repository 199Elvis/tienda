const User = require();

exports.crear = async (data) => {
    try {
        const nuevoUsuario = await User.create({
            nombre: data.nombre,
            ci: data.ci,
            cargo: data.cargo,
            email: data.email,
            pasword: data.contrasenia,
            fechaRegistro: data.fechaRegistro
            
        });
        return nuevoUsuario;
    } catch (error) {
        throw error;
    }
};
exports.actualizarUsuario = async (data) => {
    try {
        const [filasActualizadas] = await User.update(
            {
                nombre: data.nombre,
                cargo: data.cargo,
                email: data.email,
                pasword: data.contrasenia
            },
            {
                where: { idUsuario: data.id }
            }
        );

        if (filasActualizadas === 0) {
            return null;
        }
        return filasActualizadas;
    } catch (error) {
        throw new Error(`Error al actualizar usuario: ${error.message}`);
    }
};
exports.getUsuarios = async () => {
    try {
        const usuarios = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['nombre', 'ASC']]
        });
        return { success: true, data: usuarios };
    } catch (error) {
        return { success: false, error: 'Error al obtener usuarios' };
    }
};