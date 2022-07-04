const express = require('express')
const router = express.Router()

const {AddReview,GetAllReviews,GetUserReview,DeleteReview} = require('../controllers/review')
const {getId} = require('../middleware/getId')



router.route('/add-review/:id').post(getId,AddReview)

router.route('/get-reviews/:id').get(GetAllReviews)

router.route('/get-user-reviews/:id').get(getId,GetUserReview)

router.route('/delete-review/:id').post(getId,DeleteReview)

module.exports = router