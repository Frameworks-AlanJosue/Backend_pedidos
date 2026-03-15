import { initBaseDeDatos } from './bd/init.js'
import Pedido from './bd/modelos/pedido.js'

await initBaseDeDatos()

/**
 * Ejemplo de creación, actualización y consulta de pedidos utilizando Mongoose.
 */
const pedido = new Pedido({
  nombre: 'Juan Gabriel Lopez',
  telefono: '4181231234',
  direccion: 'Calle Principal #123, San Felipe, Gto',
  fecha_solicitud: new Date('2026-02-07'),
  fecha_envio: new Date('2026-02-09'),
  total: 45.00,
  pagado: ['PAGADO'],
  comentario: 'Ha sido pagado el pedido',
})

// Guardar el nuevo pedido en la base de datos (solo una vez)
const createdPedido = await pedido.save()

// Actualizar el nombre del cliente para el pedido creado
await Pedido.findByIdAndUpdate(createdPedido._id, {
  $set: { nombre: 'Juan Gabriel Lopez Beltran' },
})

// Consultar y mostrar todos los pedidos en la base de datos
const pedidos = await Pedido.find()

// Mostrar los pedidos en la consola
console.log(pedidos)