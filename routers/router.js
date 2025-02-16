const express = require('express')

const recipeController = require("../controllers/recipeController")
const testimonyController = require("../controllers/testimonyContoller")

const router = new express.Router()
//http://localhost:5000/allRecipes
router.get("/allRecipes",recipeController.getAllRecipes)


//http://localhost:5000/addTestimony
router.post("/addTestimony",testimonyController.addTestimony)

module.exports = router