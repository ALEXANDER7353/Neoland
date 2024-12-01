// Función para validar nombres
const nameValidator = (name, res) => {
    console.log("🚀 ~ nameValidator ~ name:", name); // Log para depuración, muestra el nombre recibido

    // Verificamos si el nombre es inválido:
    // 1. Si no existe (es null o undefined).
    // 2. Si no es un string.
    if (!name || typeof name !== 'string') {
        return false; // Si el nombre no es válido, retornamos false
    }

    // Si el nombre es válido, retornamos true
    return true;
};

// Exportamos la función `nameValidator` para que pueda ser utilizada en otros módulos
module.exports = { nameValidator };
