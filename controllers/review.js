const {Review} = require('../models/review_model')
const {user, User} = require('../models/user_model')
exports.GetAllReviews = async (req,res,next) => {
    const productId = req.params.id
  
    try {
        const reviews = await Review.find({"productId":productId})
        
 
         if(!reviews){
            res.status(400).json({
                success:false,
                message:"Something went wrong"
            })
        }
        res.status(200).json({
            success:true,
            reviews
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

exports.GetUserReview = async (req,res,next) => {
    const userId = req.user.id
    const productId = req.params.id
    try {
        const reviews = await Review.find({"userId":userId, "productId":productId})
        
 
         if(!reviews){
            res.status(400).json({
                success:false,
                message:"Something went wrong"
            })
        }
        res.status(200).json({
            success:true,
            reviews
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}


exports.AddReview = async (req,res,next) => {

    const userId = req.user.id
    const productId = req.params.id

    const {rating, title, content, photoURL} = req.body
    try {

        const theUsername = await User.findById(userId)
        const {username} = theUsername
        const newReview = await Review.create({
            userId, productId, rating, title, content, photoURL, username
        }) 
        if(!newReview){
            res.status(400).json({
                success:true,
                message:"Something went wrong"
            })
        }
        res.status(200).json({
            success:true,
            message:"Review added"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }

}

exports.DeleteReview = async (req,res,next) => {
    const id = req.params.id
    try {
        const review = await Review.findByIdAndDelete(id)
        res.status(200).json({
            success:true,
            message:"Product Deleted"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Delete failed"
        })
    }
}