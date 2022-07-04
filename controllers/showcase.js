const {Showcase} = require('../models/showcase')

exports.CreateShowCaseItem = async (req,res,next) => {
    
    const {title, description, price, img, sizes, brand} = req.body
    try {
        const product = await Showcase.create({
            title, description, price, img, sizes, brand
        })

        res.status(200).send(product)        
    } catch (error) {
        res.status(200).json({
            success:false,
            message:error.message
        })
    }
}


exports.GetShowCaseItems = async (req,res,next) => {
   
    try {
        const product = await Showcase.find({})
        res.status(200).json({
            success:true,
            product
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Delete failed"
        })
    }
}