const fs = require('fs'); // Importamos el módulo para manejar archivos
const path = require('path'); // Importamos el módulo para manejar rutas

const usuariosPath = path.join(__dirname, '../data/usuarios.json'); // Ruta al archivo JSON de usuarios

// Función para leer usuarios desde el archivo
const leerUsarios = () => {
    const data = fs.readFileSync(usuariosPath, 'utf-8'); // Leemos el archivo
    return JSON.parse(data); // Parseamos el contenido como JSON
};

// Función para escribir usuarios en el archivo
const escribirUsuarios = (usuarios) => {
    fs.writeFileSync(usuariosPath, JSON.stringify(usuarios, null, 2)); // Escribimos los datos en formato JSON
};

// Controlador para listar todos los usuarios
const listarUsarios = (req, res) => {
    const users = leerUsarios(); // Obtenemos los usuarios
    res.json(users); // Enviamos los usuarios como respuesta
};

// Controlador para listar un usuario por ID
const listarUsuario = (req, res) => {
    const id = +req.params.id; // Obtenemos el ID desde los parámetros
    const users = leerUsarios(); // Obtenemos los usuarios
    const user = users.find((user) => user.id === id); // Buscamos el usuario por ID

    if (user) return res.json(user); // Respondemos si encontramos el usuario
    res.status(404).send('Usuario no encontrado'); // Respondemos con error si no lo encontramos
};

// Controlador para crear un usuario
const crearUsuario = (req, res) => {
    const usuarios = leerUsarios(); // Obtenemos los usuarios actuales
    const newUser = req.body; // Obtenemos los datos del nuevo usuario
    newUser.id = usuarios.length + 1; // Asignamos un ID único
    usuarios.push(newUser); // Agregamos el nuevo usuario a la lista
    escribirUsuarios(usuarios); // Guardamos los usuarios actualizados
    res.status(200).json(newUser); // Respondemos con el nuevo usuario
};

// Controlador para actualizar un usuario
const actualizarUsuario = (req, res) => {
    const usuarios = leerUsarios(); // Obtenemos los usuarios actuales
    const newInfoUser = req.body; // Obtenemos los nuevos datos del usuario
    const id = +req.params.id; // Obtenemos el ID desde los parámetros
    const index = usuarios.findIndex(user => user.id === id); // Buscamos el índice del usuario por ID

    if (index === -1) return res.status(404).json({ error: 'Usuario no encontrado' }); // Error si el usuario no existe

    usuarios[index] = { ...usuarios[index], ...newInfoUser }; // Actualizamos los datos del usuario
    escribirUsuarios(usuarios); // Guardamos los usuarios actualizados
    res.status(200).json(usuarios[index]); // Respondemos con el usuario actualizado
};

// Controlador para eliminar un usuario
const eliminarUsuario = (req, res) => {
    const usuarios = leerUsarios(); // Obtenemos los usuarios actuales
    const id = +req.params.id; // Obtenemos el ID desde los parámetros
    const usersFiltered = usuarios.filter(user => user.id !== id); // Filtramos los usuarios eliminando el que coincide con el ID

    if (usersFiltered.length === usuarios.length) return res.status(404).json({ error: 'Usuario no encontrado' }); // Error si el usuario no existe

    escribirUsuarios(usersFiltered); // Guardamos los usuarios actualizados
    res.status(200).send(); // Respondemos con éxito
};

module.exports = { listarUsarios, listarUsuario, crearUsuario, actualizarUsuario, eliminarUsuario }; // 
