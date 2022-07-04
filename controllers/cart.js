const {Cart} = require('../models/Cart')


exports.CreateItem = async (req,res,next) =>{
    const {title, description, price, img, size, brand} = req.body
    const userId = req.user.id
    
    try {
        const CartItem = await Cart.create({
            userId,title,description,price,img,size,brand
        })

        res.status(200).json({
            success:true,
            message:"Added to cart"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

exports.UpdateItem = async (req,res,next) =>{
    const id = req.params.id

    const {title, description, price, img, size, quantity, brand} = req.body

    try {
        const CartItem = await Cart.findByIdAndUpdate(id,{
            $set:{title:title,description:description,price:price,img:img,size:size,quantity:quantity,brand:brand}
        },{new:true})

        res.status(200).json({
            success:true,
            message:CartItem
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Update failed"
        })
    }
}

exports.DeleteItem = async (req,res,next) => {
    const id = req.params.id

    try {
        const CartItem = await Cart.findByIdAndDelete(id)
        res.status(200).json({
            success:true,
            message:"Item deleted"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Deletion failed"
        })
    }

}


exports.GetItems = async (req,res,next) => {
    const userId = req.user.id
    
    try {
        const CartItem = await Cart.find({userId:userId})
        res.status(200).json({
            success:true,
            CartItem
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Something went wrong"
        })
    }
}