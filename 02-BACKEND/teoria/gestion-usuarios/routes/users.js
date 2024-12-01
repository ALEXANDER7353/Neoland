const express = require('express'); // Importamos Express
const router = express.Router(); // Creamos un enrutador

// Importamos los controladores de usuarios
const { listarUsarios, listarUsuario, crearUsuario, actualizarUsuario, eliminarUsuario } = require('../controllers/users');

// Importamos el middleware para validar usuarios
const validarUsuario = require('../middleware/userMiddleware');

// Rutas para usuarios
router.get('/', listarUsarios); // Endpoint para listar todos los usuarios
router.get('/:id', listarUsuario); // Endpoint para listar un usuario por ID
router.post('/', validarUsuario, crearUsuario); // Endpoint para crear un usuario (con validación)
router.put('/:id', validarUsuario, actualizarUsuario); // Endpoint para actualizar un usuario por ID (con validación)
router.delete('/:id', eliminarUsuario); // Endpoint para eliminar un usuario por ID

module.exports = router; // Exportamos el enrutador
