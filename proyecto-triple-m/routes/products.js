const express = require('express')

const { createProduct,readProducts} = require('../controllers/products')

const router = express.Router()



router.post('/', createProduct)
router.get('/:id', readProducts)

module.exports = router