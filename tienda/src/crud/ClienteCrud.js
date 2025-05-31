const Cliente = require();

exports.crear = async (data) => {
    try{
        const cliente = await Cliente.create({
            nombre: data.nombre,
            ci: data.ci
        })
        return cliente;
    }catch(error){
        throw error;
    }
}

exports.buscar = async (ci) => {
    try{
        const cliente = await Cliente.findOne({
            where: {
                ci: ci
            }
        })
        if(cliente === 0){
            return null;
        }
        return cliente;
    }catch(error){
        throw error;
    }
}