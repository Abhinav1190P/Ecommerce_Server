const mongoose = require('mongoose')


const reviewSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    productId:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true,
        max:5
    },
    title:{
        type:String,
        required:true,
        maxlength:30,
        minlength:5
    },
    content:{
        type:String,
        required:true
    },
    photoURL:{
        type:String,
        required:false
    }
    
},{timestamps:true})


const Review = mongoose.model('Review',reviewSchema)

module.exports = {
    Review
}