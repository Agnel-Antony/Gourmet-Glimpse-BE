//1 load .env file
require('dotenv').config()

//2 import express
const express = require('express') 
//6 import cors
const cors = require('cors')

const db= require('./DB/connection')

const router = require('./routers/router')

//3 create an app using expres
const GourmetGlimpseServer = express()

//7 use
GourmetGlimpseServer.use(cors())
GourmetGlimpseServer.use(express.json())
GourmetGlimpseServer.use(router)

//4 port creation
const PORT = 5000 || process.env.PORT
//5 run
GourmetGlimpseServer.listen(PORT,()=>{
    console.log("GourmetGlimpseServer running on the port "+PORT);
    
})

GourmetGlimpseServer.get('/',(req,res)=>{
    res.send("Welcome to GourmetGlimpseServer")
})