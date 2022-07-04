const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    img:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        default:1
    },
    brand:{
        type:String
    }
},{timestamps:true})


const Cart = mongoose.model('Cart',cartSchema)

module.exports = {
    Cart
}