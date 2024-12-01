const { nameValidator } = require('../utils/validator'); // Importamos el validador de nombres

// Middleware para validar productos
const validarProducto = (req, res, next) => {
    const { name, precio } = req.body; // Extraemos los datos del cuerpo de la solicitud

    const isValidName = nameValidator(name); // Validamos el nombre
    if (!isValidName) {
        return res.status(400).json({ error: 'El nombre del producto es inválido' }); // Enviamos error si el nombre es inválido
    }

    if (!precio || typeof precio !== 'number' || precio < 0) {
        return res.status(400).json({ error: 'El precio del producto es inválido' }); // Enviamos error si el precio es inválido
    }

    next(); // Pasamos al siguiente middleware o controlador si todo es válido
};

module.exports = validarProducto; // Exportamos el middleware
