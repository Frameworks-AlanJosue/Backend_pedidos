// servicios/pedidos.js
import Pedido from "../bd/modelos/pedido.js";

/**
 * Función para crear un nuevo pedido en la base de datos.
 */
export async function creaPedido({
  nombre,
  telefono,
  direccion,
  fecha_solicitud,
  fecha_envio,
  total,
  pagado,
  comentario,
}) {
  const pedido = new Pedido({
    nombre,
    telefono,
    direccion,
    fecha_solicitud,
    fecha_envio,
    total,
    pagado,
    comentario,
  });

  return await pedido.save();
}

/**
 * Función para obtener una lista de pedidos de la base de datos.
 */
export async function listaPedidos(
  query = {},
  { sortBy = "createdAt", sortOrder = "descending" } = {},
) {
  return await Pedido.find(query).sort({ [sortBy]: sortOrder });
}

/**
 * Función para obtener una lista de todos los pedidos de la base de datos.
 */
export async function listaAllPedidos(opciones) {
  return await listaPedidos({}, opciones);
}

/**
 * Función para obtener una lista de pedidos filtrados por nombre del cliente.
 */
export async function listaPedidosByNombre(nombre, opciones) {
  return await listaPedidos({ nombre }, opciones);
}

/**
 * Función para obtener una lista de pedidos filtrados por pagado.
 */
export async function listPedidosByPagado(pagado, opciones) {
  return await listaPedidos({ pagado }, opciones);
}

/**
 * Función para obtener un pedido específico por su ID.
 */
export async function getPedidoById(pedidoId) {
  return await Pedido.findById(pedidoId);
}

/**
 * Función para modificar un pedido existente.
 */
export async function modificaPedido(
  pedidoId,
  {
    nombre,
    telefono,
    direccion,
    fecha_solicitud,
    fecha_envio,
    total,
    pagado,
    comentario,
  },
) {
  return await Pedido.findOneAndUpdate(
    { _id: pedidoId },
    {
      $set: {
        nombre,
        telefono,
        direccion,
        fecha_solicitud,
        fecha_envio,
        total,
        pagado,
        comentario,
      },
    },
    { new: true },
  );
}

/**
 * Elimina un pedido.
 */
export async function eliminaPedido(pedidoId) {
  return await Pedido.findByIdAndDelete(pedidoId);
}