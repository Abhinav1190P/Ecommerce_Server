const express = require('express')
const router = express.Router()

const {isLiked,Like,UnLike,GetAllItems,DeleteItem} = require('../controllers/wishlist')
const {getId} = require('../middleware/getId')


router.route('/check-like/:id').get(getId,isLiked)

router.route('/like-product/:id').post(getId,Like)

router.route('/unlike-product/:id').post(getId,UnLike)

router.route('/get-favourite-items').get(getId,GetAllItems)

router.route('/delete-item/:id').post(getId,DeleteItem)

module.exports = router