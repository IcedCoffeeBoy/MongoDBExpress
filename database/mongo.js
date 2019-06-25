const mongoose = require('mongoose');


var DB_connection = process.env.DB_CONNECTION ? process.env.DB_CONNECTION : 'mongodb://localhost:27017/local'

mongoose.connect(DB_connection, { useNewUrlParser: true })
    .then(() => { console.log("Successfully connected to mongodb!") })
    .catch((err) => { console.log(err) })

var db = mongoose.connection;


module.exports = db;

