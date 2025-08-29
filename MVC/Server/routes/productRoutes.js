const ProductModel = require("@models/product.js")
const express = require('express')
const {getAllProduct, updateProduct, deleteProduct, InsertManyProduct, deleteManyProduct,getByProductId} = require('../controllers/productControllers.js')

const router = express.Router()

router.get('/', getAllProduct)
router.get('/:_id', getByProductId)

// router.post('/', createProduct)

router.post('/', InsertManyProduct)

router.put('/:_id', updateProduct)

router.delete('/:_id',deleteProduct )

router.delete('/bulk/:_id', deleteManyProduct)

module.exports = router;