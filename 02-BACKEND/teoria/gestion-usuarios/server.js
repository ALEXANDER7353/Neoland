const express = require('express'); // Importamos el módulo de Express
const app = express(); // Creamos una instancia de Express
const userRouter = require('./routes/users'); // Importamos las rutas de usuarios
const productRouter = require('./routes/products'); // Importamos las rutas de productos
const pedidoRouter=require('./routes/pedidos');


app.use(express.json()); // Middleware para parsear las solicitudes en formato JSON
app.use('/users', userRouter); // Usamos el enrutador de usuarios con el prefijo '/users'
app.use('/productos', productRouter); // Usamos el enrutador de productos con el prefijo '/productos'
app.use('/pedidos',pedidoRouter);
app.listen(3000, () => {
    console.log('El servidor se inició correctamente'); // Confirmamos que el servidor está corriendo
});
