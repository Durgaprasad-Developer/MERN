const ProductModel = require("../models/product.js")
const express = require('express')
const {getAllProduct, updateProduct, deleteProduct, InsertManyProduct} = require('../controllers/productControllers.js')

const router = express.Router()

router.get('/', getAllProduct)

// router.post('/', createProduct)

router.post('/', InsertManyProduct)

router.put('/:_id', updateProduct)

router.delete('product/:id',deleteProduct )

module.exports = router;