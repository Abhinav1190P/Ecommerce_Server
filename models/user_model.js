const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const userSchema = new mongoose.Schema({
    name: {
        type:String,
        minlength:5,
        maxlength:20
    },
    lastname: {
        type:String,
        minlength:5,
        maxlength:20
    },
    email: {
        type:String,
        unique:true,
        match:[
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please provide a valid email"
        ]
    },
    username:{
        type:String,
        required:true,
        minlength:6
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        select:false
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date
},
{
    timestamps:true
})

userSchema.pre("save",async function(next){
    var user = this;
    if(!user.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
    next()

})


userSchema.methods.getSignedToken = async function(){
    const token = jwt.sign({id:this._id,isAdmin:this.isAdmin},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES
    })
    return token
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
    }


const User = mongoose.model('User',userSchema)

module.exports = {
    User
}