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



module.exports = { createProduct }