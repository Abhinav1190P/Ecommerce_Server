const {Like} = require('../models/wishlist_model')

exports.isLiked = async (req,res,next) => {
    const userId = req.user.id
    const productId = req.params.id
    try {
        const isLiked = await Like.find({"userId":userId,"productId":productId})
        if(isLiked.length == 0){
            res.status(200).json({
                isLiked:false
            })
        }
        else{
            res.status(200).json({
                isLiked:true
            })
        }
    
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

exports.Like = async (req,res,next) => {
    const userId = req.user.id
    const productId = req.params.id
    const {title,description,price,img,sizes,rating,brand} = req.body
    try {
        const liked = await Like.create({
            userId:userId,productId:productId,title:title,description:description,price:price,img:img,sizes:sizes,rating:rating,brand:brand
        }) 
        if(!liked){
            res.status(400).json({
                success:false,
                message:"Something went wrong"
            })
        }
        res.status(200).json({
            success:true,
            message:"Product liked"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

exports.UnLike = async (req,res,next) => {
    const userId = req.user.id
    const productId = req.params.id
    
 
    try {
        const deleted = await Like.findOneAndDelete({"userId":userId,"product":productId})
        if(!deleted){
            res.status(200).json({
                success:false,
                message:"Something went wrong"
            })
        }
        res.status(200).json({
            success:true,
            message:"Product unliked"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}


exports.GetAllItems = async (req,res,next) =>{
    const userId = req.user.id

    try {
        const items = await Like.find({"userId":userId})
        if(!items){
            res.status(200).json({
                success:false,
                message:"Something went wrong"
            })
        }
        res.status(200).json({
            success:true,
            items
        })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

exports.DeleteItem = async (req,res,next) => {
    const userId = req.user.id
    const likeId = req.params.id
    
    try {
        const items = await Like.findOneAndDelete({"userId":userId,"_id":likeId})
        if(!items){
            res.status(200).json({
                success:false,
                message:"Something went wrong"
            })
        }
        res.status(200).json({
            success:true,
            message:"Item Deleted"
        })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}