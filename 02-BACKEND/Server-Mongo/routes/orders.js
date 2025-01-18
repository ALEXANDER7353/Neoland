const express = require('express')

const { createOrder, getOrder, udpateOrder } = require('../controllers/orders')

const router = express.Router()


router.post('/', createOrder)
router.get('/:id', getOrder)
router.put('/:id', udpateOrder)

module.exports = router