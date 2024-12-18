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


module.exports = { createProduct,readProducts }