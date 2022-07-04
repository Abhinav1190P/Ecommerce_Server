const express = require('express')
const router = express.Router();


const {getPrivate} =  require('../controllers/private')
const {protect} = require('../middleware/private')


router.route("/").get(protect,getPrivate)


module.exports = router;