const express = require('express'); // Importamos Express
const router = express.Router(); // Creamos un enrutador

// Importamos los controladores de productos
const { listarProductos, agregarProducto, eliminarProducto, listarProducto, actualizarProducto } = require('../controllers/products');

// Importamos el middleware para validar productos
const validarProducto = require('../middleware/productoMiddleware');

// Rutas para productos
router.get('/', listarProductos); // Endpoint para listar todos los productos
router.get('/:id', listarProducto); // Endpoint para listar un producto por ID
router.post('/', validarProducto, agregarProducto); // Endpoint para agregar un producto (con validación)
router.put('/:id', validarProducto, actualizarProducto); // Endpoint para actualizar un producto por ID (con validación)
router.delete('/:id', eliminarProducto); // Endpoint para eliminar un producto por ID

module.exports = router; // Exportamos el enrutador
