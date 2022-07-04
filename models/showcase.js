const mongoose = require("mongoose")


const showcaseSchema = new mongoose.Schema({
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
    brand:{
        type:String,
        required:true
    },
    productId:{
        type:String,
        required:true
    }
},{timestamps:true})




const Showcase = mongoose.model('Showcase',showcaseSchema)

module.exports = {
    Showcase
}
