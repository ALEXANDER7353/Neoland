const express = require('express')

const { createOrder, getOrder, updateOrder } = require('../controllers/orders')

const router = express.Router()

router.post('/', createOrder)
router.get('/:id', getOrder)
router.put('/:id', updateOrder)

module.exports = router