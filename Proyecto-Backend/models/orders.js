const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },
        products: [
            {
                product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', require: true },
                quantity: { type: Number, require: true }
            }
        ],
        totalPrice: { type: Number, require: true },
        status: { type: String, default: 'Pending', enum: ['Pending', 'Out of delivery', 'Delivered',] }
    },
    { timestamps: true }

)

const Order = mongoose.model('Order', orderSchema)

module.exports = Order