const fs = require('fs'); // Importamos el módulo `fs` para manejar el sistema de archivos
const path = require('path'); // Importamos `path` para manejar rutas de archivos

// Ruta al archivo JSON donde se almacenan los productos
const productosPath = path.join(__dirname, '../data/productos.json');

// Función para leer productos desde el archivo JSON
const leerProductos = () => {
    const data = fs.readFileSync(productosPath, 'utf-8'); // Leemos el archivo como texto
    return JSON.parse(data); // Convertimos el texto en un objeto JSON
};

// Controlador para listar todos los productos
const listarProductos = (req, res) => {
    const productos = leerProductos(); // Obtenemos todos los productos
    res.json(productos); // Respondemos con la lista de productos en formato JSON
};

// Controlador para listar un producto por su ID
const listarProducto = (req, res) => {
    const id = +req.params.id; // Convertimos el ID de los parámetros a número
    const productos = leerProductos(); // Obtenemos todos los productos
    const producto = productos.find((producto) => producto.id === id); // Buscamos el producto por su ID

    if (producto) return res.json(producto); // Si el producto existe, lo devolvemos en la respuesta
    res.send('El producto no existe'); // Si no existe, respondemos con un mensaje de error
};

// Función para escribir productos en el archivo JSON
const escribirProductos = (productos) => {
    console.log(":rocket: ~ escribirProductos ~ productos:", productos); // Log para depuración
    fs.writeFileSync(productosPath, JSON.stringify(productos, null, 2)); // Escribimos los productos en el archivo JSON con formato legible
};

// Controlador para agregar un producto nuevo
const agregarProducto = (req, res) => {
    const productos = leerProductos(); // Obtenemos los productos existentes
    const nuevoProducto = req.body; // Obtenemos los datos del nuevo producto del cuerpo de la solicitud
    nuevoProducto.id = productos.length + 1; // Generamos un ID único basado en la longitud del array
    productos.push(nuevoProducto); // Agregamos el nuevo producto al array
    escribirProductos(productos); // Guardamos los productos actualizados en el archivo JSON
    res.json(nuevoProducto); // Respondemos con el producto recién agregado
};

// Controlador para eliminar un producto por su ID
const eliminarProducto = (req, res) => {
    const productos = leerProductos(); // Obtenemos los productos existentes
    const id = +req.params.id; // Convertimos el ID de los parámetros a número
    const productosFiltrados = productos.filter((producto) => producto.id !== id); // Filtramos los productos eliminando el que coincide con el ID

    console.log(":rocket: ~ eliminarProducto ~ productosFiltrados:", productosFiltrados); // Log para depuración

    if (productosFiltrados.length === productos.length) {
        return res.status(404); // Si el producto no fue encontrado, devolvemos un error 404
    }

    escribirProductos(productosFiltrados); // Guardamos los productos filtrados en el archivo JSON
    res.send('Producto eliminado'); // Respondemos con un mensaje de éxito
};

// Controlador para actualizar un producto por su ID
const actualizarProducto = (req, res) => {
    const productos = leerProductos(); // Obtenemos los productos existentes
    const newInfoProducto = req.body; // Obtenemos la nueva información del cuerpo de la solicitud
    const id = +req.params.id; // Convertimos el ID de los parámetros a número
    const index = productos.findIndex((producto) => producto.id === id); // Buscamos el índice del producto en el array

    if (index === -1) {
        return res.status(404).json({ error: 'No encontramos al producto' }); // Si no encontramos el producto, devolvemos un error 404
    }

    console.log(":rocket: ~ actualizarProducto ~ index:", index); // Log para depuración

    productos[index] = { ...productos[index], ...newInfoProducto }; // Actualizamos los datos del producto manteniendo los existentes
    escribirProductos(productos); // Guardamos los productos actualizados en el archivo JSON
    res.status(200).json(productos[index]); // Respondemos con el producto actualizado
};

// Exportamos los controladores para que puedan ser utilizados en las rutas
module.exports = { listarProductos, agregarProducto, eliminarProducto, listarProducto, actualizarProducto };












