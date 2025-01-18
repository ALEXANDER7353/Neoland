const Product = require('../models/products')

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log("🚀 ~ createProduct ~ error:", error)
        res.status(500).json({ message: 'Create product error' })
    }
}


const readProducts = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({ message: 'Not found' })
        }
        res.status(200).json(product)
    } catch (error) {
        console.log("🚀 ~ getProduct ~ error:", error)
        res.status(500).json({ message: 'Get product error' })

};
}

const updateProduct = async (req, res) => {
    try {
        // Buscar el producto por ID
        const product = await Product.findById(req.params.id);

        // Verificar si el producto existe
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        // Actualizar las propiedades del producto con los datos del cuerpo de la solicitud
        Object.keys(req.body).forEach((key) => {
            product[key] = req.body[key];
        });

        // Guardar los cambios en la base de datos
        const productUpdated = await product.save();

        // Respuesta exitosa
        res.status(200).json(productUpdated);
    } catch (error) {
        console.error("🚀 ~ updateProduct ~ error:", error.message);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};


const deleteProduct = async (req, res) =>{
    try {
        const deletedProduct = await Product.findByIdAndDelete (req.params.id)
        console.log (deletedProduct)
        if (!deletedProduct) {
            return res.status (404).json ({errorMessage: 'Product not found'})
        }
        res.json ({message: 'Product deleted successfully'})
    } catch (error) {
        console.log (error)
        res.status (500).json ({message: 'Server error'})
        
    }

};



module.exports = { createProduct,readProducts,updateProduct,deleteProduct}