//routes/users.js
const express = require('express');
const router = express.Router();

//Define a route


router.get('/', (req,res) => {
    res.send('this is product page')
    //http://localhost:3000/products

});

router.get('/101', (req,res) => {
    res.send('this is product page 101')
    //http://localhost:3000/products/101

});

router.get('/102', (req,res) => {
    res.send('this is product page 102')
    //http://localhost:3000/products/102

});

//export the router module so that server.js file can use it
module.exports = router;