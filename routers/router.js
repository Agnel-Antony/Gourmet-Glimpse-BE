const express = require('express')

const recipeController = require("../controllers/recipeController")
const testimonyController = require("../controllers/testimonyContoller")
const userController = require("../controllers/userContoller")

const router = new express.Router()
//http://localhost:5000/allRecipes
router.get("/allRecipes",recipeController.getAllRecipes)


//http://localhost:5000/addTestimony
router.post("/addTestimony",testimonyController.addTestimony)

//http://localhost:5000/register
router.post("/register",userController.register)

//http://localhost:5000/login
router.post("/login",userController.login)


module.exports = router