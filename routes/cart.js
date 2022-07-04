const express = require('express')

const router = express.Router()

const {CreateItem,DeleteItem,UpdateItem,GetItems} = require('../controllers/cart')
const {getId} = require('../middleware/getId')


router.route("/add-item").post(getId,CreateItem)

router.route("/update-item/:id").post(getId,UpdateItem)

router.route("/delete-item/:id").post(getId,DeleteItem)

router.route("/get-items").get(getId,GetItems)

module.exports = router