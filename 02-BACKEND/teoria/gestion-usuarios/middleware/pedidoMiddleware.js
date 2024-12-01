const { nameValidator } = require('../utils/validator'); // Importamos el validador de nombres

const validarPedido = (req,res,nex)=>{
    const{ name,precio }= req.body;

    const isValidName=nameValidator(name);
    if(!isValidName){
        return res.status(400).json({error:'El nombre del pedido no es valido'})
    }

    if(!precio  || typeof precio !== 'number'  || precio < 0 ){
        return res.status(400).json({error:'El precio del pedido no es valido'});

    }
    nex();
}

module.exports = validarPedido;