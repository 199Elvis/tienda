const validationPago = require();
const sucursalService = require();
const validationFactura = require();
const detallePedidoService = require();
const clienteService = require();
const validationPedido = require();

exports.realizarPedido = async (data) => {
    try{
        const fecha = new Date();
        const dataPago = {
            monto: data.monto,
            fecha: data.fecha,
            metodo: data.metodo
        }
        const dataCliente = {
            nombre: data.nombre,
            ci: data.ci
        }
        const pago = validationPago.crear(dataPago);
        const sucursal = sucursalService.getSucursal();
        const cliente = clienteService.crear(dataCliente);
        const dataPedido = {
            fecha: fecha,
            estado: "pendiente",
            total: data.total,
            idSucursal: sucursal.idSucursal,
            idUsuario: data.idUsuario,
            idCliente: cliente.idCliente
        }
        const pedido = validationPedido.crear(dataPedido);
        
    }catch(error){
        throw error;
    }
}


