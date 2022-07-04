const {Product} = require("../models/product_model")

exports.CreateProduct = async (req,res,next) =>{

    const {title, description, price, img, size} = req.body
    try {
        const product = await Product.create({
            title, description, price, img, size
        })
        res.status(200).send(product)        
    } catch (error) {
        res.status(200).json({
            success:false,
            message:error.message
        })
    }
} 

exports.UpdateProduct = async (req,res,next) =>{
    const id = req.params.id
    const {title, description, price, img, size} = req.body

    try {
        const product = await Product.findByIdAndUpdate(id,{
            $set: {title: title, description: description, price: price, img: img, size: size}
        },{new:true})        

        res.status(200).json({
            success:true,
            product
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:'Update failed'
        })
    }

}


exports.DeleteProduct = async (req,res,next) =>{
    const id = req.params.id
    try {
        const product = await Product.findByIdAndDelete(id)
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

exports.GetAllProducts = async (req,res,next) =>{
    try {
        const product = await Product.find({})
        res.status(200).json({
            product
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })        
    }
}

exports.GetOneProduct = async (req,res,next) => {
    try {
        const id = req.params.id
        const item = await Product.findById(id)
        res.status(200).json({
            item
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.messages
        })        
    }
}


/* 
exports.SaveLike = async (req,res,next) => {
    try {
        const id = req.params.id
        const newLike = await Product.updateOne({"_id":id},{
            $inc:{like:1}
        })
        if(!newLike){
            res.status(400).json({
                success:false,
                messsage:"Something went wrong"
            })
        }
        res.status(200).json({
            success:true,
            message:"Added a liked"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
} */