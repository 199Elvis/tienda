const SucursalCrud = require();
const ValidationSucursal = require()
const Sucursal = require();

exports.crear = async (data) => {
    try {
        const sucursal = null;
        const datos = {
            nombre: data.nombre,
            telefono: data.telefono
        }
        if(ValidationSucursal.validarDatosSucursal(datos)){
            sucursal = await SucursalCrud.crear(data);
        }
        return sucursal;
    } catch (error) {
       throw error; 
    }
}

exports.actualizar = async (data) => {
    try{
        const sucursal = null;
        if(data.nombre == ""){
            throw new Error("el nombre esta vasio");
        }
        if(data.telefono == ""){
            throw new Error("el telefono esta vasio");
        }
        if(data.direccion == ""){
            throw new Error("la direccion esta vasia");
        }
        if(ValidationSucursal.validarDatosSucursal(datos)){
            sucursal = await SucursalCrud.crear(data);
        }
        return sucursal;
    }catch(error){
        throw error;
    }
}

exports.getSucursal = async () => {
    try{
        const sucursal = await Sucursal.findOne();
        if (!sucursal) {
            throw new Error('No se ha configurado la sucursal principal');
        }
        return sucursal;
    }catch(error){
        throw error;
    }
}