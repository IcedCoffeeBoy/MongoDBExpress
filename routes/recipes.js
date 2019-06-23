const express = require('express');
const router = express.Router();
const db = require('../database/mongo');


router.get('/', async function (req, res) {
    try {
        const data =  await db.collection('test_database').findOne();
        console.log(data);
        res.json(data);
    } catch (err) {
        console.log(err);
    }
})



module.exports = router;
