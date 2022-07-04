const jwt = require("jsonwebtoken")
const {User} = require("../models/user_model")

exports.protectProduct = async (req,res,next) =>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1]
    }

    if(!token){
        return res.status(401).send("Not authorized")
    }
    
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        if(decoded.id && decoded.isAdmin === true){
            const user = await User.findById(decoded.id)
            req.user = user
            next();
        }
        else if(!decoded.isAdmin){
            res.status(401).json({
                success:true,
                message: "Your not allowed to do that!"
            })
        }
    } catch (error) {
        res.status(200).json({
            success:false,
            message:error.message
        })
    }

}