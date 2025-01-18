const Order = require('../models/orders')
const Product = require('../models/products')

const createOrder = async (req, res) => {

    try {
        const { products, user } = req.body
        console.log("🚀 ~ createOrder ~ user:", user)
        console.log("🚀 ~ createOrder ~ products:", products)


        // buscar producto en la db (DONE)
        // necesitamos saber cuanta catidad por productos hay y su precio
        // Para calcular el total price debemos sumar cada precio total del producto
        // Validar el stock disponible (DONE)
        // restar la cantidad de productos en el order del stock (actualizar stock) (DONE)
        // totalPrice, quantity, stock
        let totalPrice = 0;
        for (const item of products) {
            console.log("🚀 ~ createOrder ~ item:", item)
            const product = await Product.findById(item.product)
            console.log("🚀 ~ createOrder ~ product:", product)
            if (!product) {
                return res.status(404).json({ message: 'Not found' })
            }
            console.log("🚀 ~ HOLAAA")
            console.log("🚀 ~ createOrder ~ item.quantity > product.stock:", item.quantity > product.stock)
            if (item.quantity > product.stock) return res.status(400).json({ message: 'eres un estafador' })
            totalPrice += product.price * item.quantity
            console.log("🚀 ~ createOrder ~ totalPrice:", totalPrice)
            product.stock = product.stock - item.quantity
            console.log("🚀 ~ createOrder ~ product:", product.stock)
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
        res.status(500)
    }


}



const getOrder = async (req, res) => {
    try {
        console.log("🚀 ~ getOrder ~ req.params.id:", req.params.id)
        const order = await Order.findById(req.params.id).populate('products.product')
        res.status(200).json(order)
    } catch (error) {
        console.log("🚀 ~ getOrder ~ error:", error)
        res.status(500).json(error)
    }

}


const updateOrder = async (req, res) => {
    const { products, user } = req.body
    try {
        const orderOriginal = await Order.findById(req.params.id)
        console.log("🚀 ~ updateOrder ~ orderOriginal:", orderOriginal)
        const orderUpdated = await Order.findById(req.params.id)
        console.log("🚀 ~ updateOrder ~ orderUpdated:", orderUpdated)
        const order = await Order.findById(req.params.id)
        if (!order) {
            return res.status(404).json({ message: 'Not found' })
        }
        for (item of order.products) {
            console.log("🚀 ~ updateOrder ~ item:", item)
            const product = await Product.findById(item.product)
            if (product) {
                console.log("🚀 ~ updateOrder ~ product.stock:", product.stock)
                console.log("🚀 ~ updateOrder ~ item.quantity:", item.quantity)
                product.stock += item.quantity
            }
            await product.save()
        }


        let totalPrice = 0;
        for (const item of products) {
            const product = await Product.findById(item.product)
            console.log("🚀 ~ updateOrder ~ product:", product)
            if (!product) {
                return res.status(404).json({ message: 'Not found' })
            }
            if (item.quantity > product.stock) return res.status(400).json({ message: 'No hay suficiente stock' })
            totalPrice += product.price * item.quantity
            product.stock = product.stock - item.quantity
            await product.save()
        }

        order.products = products
        order.totalPrice = totalPrice
        order.user = user

        await order.save()
        res.status(200).json(order)

    } catch (error) {
        console.log("🚀 ~ udpateOrder ~ error:", error)
        res.status(500).json(error)

    }

}


module.exports = { createOrder, getOrder, udpateOrder: updateOrder }