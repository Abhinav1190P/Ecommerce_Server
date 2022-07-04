const express = require('express')
const router = express.Router()

const {CreateProduct,UpdateProduct,DeleteProduct,GetAllProducts,GetOneProduct} = require('../controllers/product')

const {protectProduct} = require('../middleware/productPrivate')

router.route('/create-product').post(protectProduct,CreateProduct)

router.route('/update-product/:id').post(protectProduct,UpdateProduct)

router.route('/delete-product/:id').post(protectProduct,DeleteProduct)

router.route('/getproducts').get(GetAllProducts)

router.route('/get-one-item/:id').get(GetOneProduct)
/* 
router.route('/like-product/:id').post(SaveLike) */


module.exports = router