const { nameValidator } = require('../utils/validator'); // Importamos el validador de nombres

// Middleware para validar usuarios
const validarUsuario = (req, res, next) => {
    const { nombre, email } = req.body; // Extraemos los datos del cuerpo de la solicitud

    const isValidName = nameValidator(nombre); // Validamos el nombre
    if (!isValidName) {
        return res.status(400).json({ error: 'El nombre del usuario es inválido' }); // Enviamos error si el nombre es inválido
    }

    if (!email || !email.includes('@') || typeof email !== 'string') {
        return res.status(400).json({ error: 'El email del usuario es inválido' }); // Enviamos error si el email es inválido
    }

    next(); // Pasamos al siguiente middleware o controlador si todo es válido
};

module.exports = validarUsuario; // Exportamos el middleware
