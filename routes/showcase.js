const express = require('express')
const router = express.Router()

const {CreateShowCaseItem,GetShowCaseItems} = require('../controllers/showcase')

router.route('/postItem').post(CreateShowCaseItem)


router.route('/getAllItems').get(GetShowCaseItems)


module.exports = router