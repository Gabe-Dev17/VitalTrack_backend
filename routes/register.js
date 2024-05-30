// routes/register.js
const express = require('express');
const router = express.Router();

// Define a route
router.get('/', (req, res) => {
    res.send('this is register route, please enter below');// this gets executed when user visit http://localhost:3000/user
});

router.get('/admin', (req, res) => {
    res.send('this is admin register please enter below');// this gets executed when user visit http://localhost:3000/user/101
});

router.get('/test', (req, res) => {
    res.send('this is the test register please enter below');// this gets executed when user visit http://localhost:3000/user/102
});

// export the router module so that server.js file can use it
module.exports = router;