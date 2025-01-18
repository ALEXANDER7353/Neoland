const express = require('express')

const { createOrder, getOrder, updateOrder,deleteOrder } = require('../controllers/orders')

const router = express.Router()

router.post('/', createOrder)
router.get('/:id?', getOrder)
router.put('/:id', updateOrder)
router.delete('/:id', deleteOrder)
module.exports = router