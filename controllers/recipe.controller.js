const RecipeModel = require("../models/recipe.Schema");
const wrapAsyc = require("../utils/wrapAsyc");

const allRecipe = wrapAsyc(async (req, res) => {

    const Recipe = await RecipeModel.find()
    res.json(Recipe)

})  

const userRecipe = wrapAsyc(async (req, res) => {

    const Recipe = await RecipeModel.find({ userID: req.body.userID })
    res.json(Recipe)

})

const singleRecipe = wrapAsyc(async (req, res) => {

    const recipe = await RecipeModel.findById(req.params.id).populate('userID');
    if (!recipe) {
        return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json(recipe);

});

const addRecipe = wrapAsyc(async (req, res) => {

    const Recipe = await RecipeModel.create(req.body)
    res.json(Recipe)

})

const updateRecipe = wrapAsyc(async (req, res) => {

    let { id } = req.params
    const Recipe = await RecipeModel.findByIdAndUpdate(id, req.body, { new: true })
    res.json(Recipe)

})

const deleteRecipe = wrapAsyc(async (req, res) => {

    let { id } = req.params
    const Recipe = await RecipeModel.findByIdAndDelete(id)
    res.json("Delete succefully")

})

module.exports = { allRecipe, userRecipe, addRecipe, updateRecipe, deleteRecipe ,singleRecipe}