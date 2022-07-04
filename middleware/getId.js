const jwt = require('jsonwebtoken')

exports.getId = async (req,res,next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1]
    }
    
    if(!token){
        console.log("No token")
        return res.status(401).send("Not authorized")
    }
    try {
    
    const id = await jwt.verify(token,process.env.JWT_SECRET)
    if(!id){
        res.status(400).send({
            success:false,
            message:"Not allowed to do that"
        })
    } 
    req.user = id
    next();
    } catch (error) {
        res.status(400).send({
            success:false,
            message:error.message
        })
    }
}