const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/local', { useNewUrlParser: true })
    .then(() => { console.log("Successfully connected to local mongodb!") })
    .catch((err) => { console.log(err) })

var db = mongoose.connection;



module.exports = db;

