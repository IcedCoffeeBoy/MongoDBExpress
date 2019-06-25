const express = require('express');
const router = express.Router();
const db = require('../database/mongo');
const recipeModel = require('../database/recipe.model');
const Ingredient = require('../database/ingredient.model');

router.post('/recipe', function (req, res) {
    var newRecipe = new recipeModel({
        name: req.body.name,
        description: req.body.description,
        ingredients: req.body.ingredients
    });

    newRecipe.save(function (err, result) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            console.log(result);
            res.json({ id: result._id }).status(200);
        }
    })
})

router.post('/ingredient', function (req, res) {
    var newIngredient = new Ingredient({
        name: req.body.name,
        amount: req.body.amount
    })

    newIngredient.save((err, result) => {
        if (err) {
            console.log(err);
            res.sendStatus(404);
        } else {
            res.json({ id: result._id }).status(200);
        }
    })
})



module.exports = router;
