const express = require('express');
const router = express.Router();
const db = require('../database/mongo');
const RecipeModel = require('../database/recipe.model');


router.get('/:id', async function (req, res) {
    try {
        var param = req.params.id;
        var data = await RecipeModel.findById(param).exec();
        res.json(data);
    } catch (err) {
        console.log(err);
    }
})



module.exports = router;
