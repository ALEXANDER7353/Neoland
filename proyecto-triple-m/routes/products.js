const express = require('express')

const { createProduct,readProducts,updateProduct,deleteProduct} = require('../controllers/products')

const router = express.Router()



router.post('/', createProduct)
router.get('/:id', readProducts)
router.put('/:id', updateProduct);
router.delete('/:id',deleteProduct);



module.exports = router