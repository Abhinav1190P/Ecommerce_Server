const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
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
    sizes:{
        type:Array,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    brand:{
        type:String,
        required:true
    }
},{timestamps:true})




const Product = mongoose.model('Product',productSchema)

module.exports = {
    Product
}
