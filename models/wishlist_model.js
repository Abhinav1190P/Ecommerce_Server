const mongoose = require('mongoose')

const likeSchema = new mongoose.Schema({
    
    userId:{
        type:String,
        required:true
    },
    productId:{
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

 /* _id: '62ac79ac838aba4d96053eb9',
    title: 'Mens Casual Slim Fit',
    description: 'The color could be slightly different between on the screen
and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    price: 15.99,
    img: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    sizes: [ 'SM', 'MD', 'LG', 'XL' ],
    rating: 5,
    brand: 'Jockey' */

const Like = mongoose.model('Like',likeSchema)

module.exports = {
    Like
}

