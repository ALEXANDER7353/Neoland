// Importa el módulo 'http' de Node.js, necesario para crear un servidor HTTP.
const http = require('http');

// Crea un servidor utilizando el método `createServer`, que maneja las solicitudes entrantes.
// El servidor toma un callback con dos parámetros: `req` (solicitud) y `res` (respuesta).
const server = http.createServer((req, res) => {
    // Muestra el objeto `req` completo en la consola, que contiene información de la solicitud.
    console.log(req);

    // Establece el código de estado de la respuesta a 200, indicando que la solicitud fue exitosa.
    res.statusCode = 200;

    // Configura un encabezado HTTP para la respuesta, especificando que el contenido es JSON.
    res.setHeader('Content-type', 'Application-json');

    // Envía la respuesta al cliente y finaliza la solicitud con un mensaje en texto plano.
    res.end('HOLI ESTE ES MI PRIMER SERVER CON NODE');
});

// Define el número de puerto en el que el servidor escuchará las solicitudes.
const PORT = 3000;

// Inicia el servidor en el puerto definido y proporciona una función callback para confirmar en la consola que el servidor está funcionando correctamente.
server.listen(PORT, () => {
    console.log('Este servidor funciona correctamente');
});
