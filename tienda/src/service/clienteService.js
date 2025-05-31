const validationCliente = require();

exports.crear = async (data) => {
    try{
        return await validationCliente.crear(data);
    }catch(error){
        throw error;
    }
}