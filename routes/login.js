// routes/login.js
const express = require('express');
const router = express.Router();

// Define a route
router.get('/', (req, res) => {
    res.send('this is login route, please enter login below');// this gets executed when user visit http://localhost:3000/user
});

router.get('/admin', (req, res) => {
    res.send('this is admin login please enter below');// this gets executed when user visit http://localhost:3000/user/101
});

router.get('/test', (req, res) => {
    res.send('this is the test login please enter below');// this gets executed when user visit http://localhost:3000/user/102
});

// export the router module so that server.js file can use it
module.exports = router;