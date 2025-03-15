const users = require("../models/userSchema")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.register = async(req,res)=>{
    console.log("Inside register function");

    const {username,email,password} = req.body

    const existingUser = await users.findOne({email})
    if (existingUser){
        res.status(402).json("user already existing...")
    }
    else{
        const encryptedpassword = await bcrypt.hash(password,10)
        
        const newUser = new users({
            username,email,password:encryptedpassword
        })
        await newUser.save()
        res.status(200).json("newUser")
    }
}

exports.login = async(req,res) =>{
    console.log("Inside login function");
    
    const{email,password} =req.body

    const existingUser = await users.findOne({email})

    if (existingUser){
        const actualpswd = await bcrypt.compare(password,existingUser.password)
        console.log(actualpswd);
        
        if(actualpswd){
            //token generation
            const token = jwt.sign({userId:existingUser._id},process.env.jwtkey)
            console.log(token);

            res.status(200).json({existingUser,token})    
            
        }
        else{
            res.status(402).json("Incorrect password")
        }
        
    }
    else{
        res.status(402).json("Invalid User")
    }    
}