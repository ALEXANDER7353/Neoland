const express = require('express')

const { createProduct, getProduct } = require('../controllers/products')

const router = express.Router()


router.get('/:id', getProduct)
router.post('/', createProduct)

module.exports = router