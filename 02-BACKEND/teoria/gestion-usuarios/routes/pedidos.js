const express = require('express'); // Importamos Express
const router = express.Router(); // Creamos un enrutador

const { listarPedidos,listarPedido,agregarPedido,actualizarPedido,eliminarPedido} =  require('../controllers/pedidos');
const validarPedido = require('../middleware/pedidoMiddleware');


router.get('/', listarPedidos); // Endpoint para listar todos los productos
router.get('/:id',listarPedido );
router.post('/',validarPedido,agregarPedido);
router.put('/:id',validarPedido,actualizarPedido)
router.delete('/:id',eliminarPedido)



module.exports= router;