const Order = require('../models/orders')
const Product = require('../models/products')

const createOrder = async (req, res) => {
    try {
        const { products, user } = req.body
        console.log("🚀 ~ createOrder ~ user:", user)
        console.log("🚀 ~ createOrder ~ products:", products)

        let totalPrice = 0;
        for (const item of products) {
            console.log("🚀 ~ createOrder ~ item:", item)
            const product = await Product.findById(item.product)
            console.log("🚀 ~ createOrder ~ product:", product)
            if (!product) {
                return res.status(404).json({ message: 'Producto no encontrado' })
            }
            if (item.quantity > product.stock) {
                return res.status(400).json({ message: 'Stock insuficiente' })
            }
            totalPrice += product.price * item.quantity
            product.stock -= item.quantity
            await product.save()
        }

        const order = await Order.create({
            user,
            products,
            totalPrice
        })

        res.status(201).json(order)

    } catch (error) {
        console.log("🚀 ~ createOrder ~ error:", error)
        res.status(500).json({ message: 'Error al crear la orden', error })
    }
}

const getOrder = async (req, res) => {
    try {
        console.log("🚀 ~ getOrder ~ req.params.id:", req.params.id)
        const order = await Order.findById(req.params.id).populate('products.product')
        res.status(200).json(order)
    } catch (error) {
        console.log("🚀 ~ getOrder ~ error:", error)
        res.status(500).json({ message: 'Error al obtener la orden', error })
    }
}

const updateOrder = async (req, res) => {
    const { products, user } = req.body
    try {
        const order = await Order.findById(req.params.id)
        if (!order) {
            return res.status(404).json({ message: 'Orden no encontrada' })
        }

        for (const item of order.products) {
            const product = await Product.findById(item.product)
            if (product) {
                product.stock += item.quantity
                await product.save()
            }
        }

        let totalPrice = 0;
        for (const item of products) {
            const product = await Product.findById(item.product)
            if (!product) {
                return res.status(404).json({ message: 'Producto no encontrado' })
            }
            if (item.quantity > product.stock) {
                return res.status(400).json({ message: 'Stock insuficiente' })
            }
            totalPrice += product.price * item.quantity
            product.stock -= item.quantity
            await product.save()
        }

        order.products = products
        order.totalPrice = totalPrice
        order.user = user

        await order.save()
        res.status(200).json(order)

    } catch (error) {
        console.log("🚀 ~ updateOrder ~ error:", error)
        res.status(500).json({ message: 'Error al actualizar la orden', error })
    }
}

const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
        if (!order) {
            return res.status(404).json({ message: 'Orden no encontrada' })
        }

        
        for (const item of order.products) {
            const product = await Product.findById(item.product)
            if (product) {
                product.stock += item.quantity
                await product.save()
            }
        }

        await Order.findByIdAndDelete()
        res.status(200).json({ message: 'Orden eliminada correctamente' })
    } catch (error) {
        console.log("🚀 ~ deleteOrder ~ error:", error)
        res.status(500).json({ message: 'Error al eliminar la orden', error })
    }
}

module.exports = { createOrder, getOrder, updateOrder, deleteOrder}