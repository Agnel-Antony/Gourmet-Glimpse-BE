const testimonies = require('../models/testimonySchema')

exports.addTestimony=async(req,res)=>{
    console.log("Inside add testimony function");
    console.log(req.body);
    
    const {name,email,message}=req.body
    try{
        
        const newTestimony = new testimonies({
            name,email,message
        })
        await newTestimony.save()
        res.status(200).json(newTestimony)
    }
    catch(err){
        console.log(err);
        
        res.status(406).json(err)
    }

}