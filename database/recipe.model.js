const mongoose = require('mongoose');

var ingredient = new mongoose.Schema( {
    name: String,
    amount: Number
})

var recipe = mongoose.model('recipe', {
    name: String,
    description: String,
    ingredients: [ingredient]

})

module.exports = recipe;
