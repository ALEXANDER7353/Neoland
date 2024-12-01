const fs = require('fs'); // Importamos el módulo `fs` para manejar el sistema de archivos
const path = require('path'); // Importamos `path` para manejar rutas de archivos



const pedidosPath = path.join(__dirname, '../data/pedidos.json');

const leerPedidos =  () => {
    const data = fs.readFileSync(pedidosPath, 'utf-8'); // Leemos el archivo como texto
    return JSON.parse(data) 
};


const listarPedidos = (req, res) => {
    const pedidos = leerPedidos(); // Obtenemos todos los productos
    res.json(pedidos); // Respondemos con la lista de productos en formato JSON
};


const listarPedido= (req, res) => {
    const id = +req.params.id; // Convertimos el ID de los parámetros a número
    const pedidos = leerPedidos(); // Obtenemos todos los productos
    const pedido = pedidos.find((pedido) => pedido.id === id); // Buscamos el producto por su ID

    if (pedido) return res.json(pedido); // Si el producto existe, lo devolvemos en la respuesta
    res.send('El pedido no existe'); // Si no existe, respondemos con un mensaje de error
};

const escribirPedidos = (pedidos) => {
 // Log para depuración
    fs.writeFileSync(pedidosPath, JSON.stringify(pedidos, null, 2)); // Escribimos los productos en el archivo JSON con formato legible
};

const agregarPedido= (req,res)=>{
    const pedidos = leerPedidos();
    const nuevoPedido = req.body;
    nuevoPedido.id=pedidos.length + 1;
    pedidos.push(nuevoPedido);
    escribirPedidos(pedidos);
    res.json(nuevoPedido);
};

 const actualizarPedido=(req,res)=>{
   const pedidos=leerPedidos();
   const newInfoPedido=req.body;
   const id = +req.params.id;
   const index=pedidos.findIndex((pedido)=> pedido.id === id);

   if(index === -1){
    return res.status(404).json({error:'No se encontro el pedido '});

   }
    pedidos[index]= {...pedidos[index], ...newInfoPedido};
    escribirPedidos(pedidos);
    res.status(200).json(pedidos[index]);
};


const eliminarPedido=(req,res)=>{
    const pedidos= leerPedidos();
    const id = +req.params.id;
    const pedidosFiltrados=pedidos.filter((pedido)=>pedido.id !== id);

    if(pedidosFiltrados.length === pedidos.length) {
        return res.status(404);
  
    }
    escribirPedidos(pedidosFiltrados);
    res.send('Pedido eliminado');

};



   module.exports = {listarPedidos,listarPedido,agregarPedido,actualizarPedido,eliminarPedido};


