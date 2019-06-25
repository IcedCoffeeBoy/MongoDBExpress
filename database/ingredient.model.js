const mongoose = require('mongoose');

const ingredient = mongoose.model('ingredient', {
    name: String,
    amount: Number
});

module.exports = ingredient;