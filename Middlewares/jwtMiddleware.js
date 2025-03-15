const jwt = require("jsonwebtoken")

const jwtMiddleware = (req,res,next)=>{
    console.log("Inside jwt middleware");

    try{
        const token = req.headers['Authorization'].slice(7)
        console.log(token);
        if(token){
            jwtVerification = jwt.verify(token.process.env.jwtkey)
            console.log(jwtVerification);
            req.payload = jwtVerification.userId
            next();            
        }
        else{
            res.status(404).json("Please provide token")
        }
    }
    catch{
        res.status(401).json("Please login")
    }
    
}

module.exports = jwtMiddleware