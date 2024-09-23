const {Router}=require("express")
const { allRecipe, userRecipe, addRecipe, updateRecipe, deleteRecipe, singleRecipe } = require("../controllers/recipe.controller")
const Auth = require("../middleware/auth")
const ERoute=Router()

ERoute.get("/allRecipe",Auth,allRecipe)
ERoute.get("/userRecipe",Auth,userRecipe)
ERoute.get("/singleRecipe/:id",Auth,singleRecipe)
ERoute.post("/addRecipe",Auth,addRecipe)
ERoute.patch("/updateRecipe/:id",Auth,updateRecipe)
ERoute.delete("/deleteRecipe/:id",Auth,deleteRecipe)

module.exports=ERoute