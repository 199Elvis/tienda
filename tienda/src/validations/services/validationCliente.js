const clienteCrud = require();
const {cadenas, numeros,} = require();

exports.crear = async (data) => {
    try{
        if(!cadenas(data.nombre)){
            throw new  Error("nombre incorrecto");
        }
        if(!numeros(data.ci)){
            throw new Error("ci incorrecto");
        }
        const cliente = await clienteCrud.buscar(data.ci);
        if(cliente){
            return cliente;
        }
        return await clienteCrud.crear(data);
    }catch(error){
        throw error;
    }
}