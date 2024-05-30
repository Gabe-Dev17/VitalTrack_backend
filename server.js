// server.js
const express = require('express');
const app = express();


app.get('/', (req, res) => {
res.send('<h1>hello root node</h1>');// this gets executed when you visit http://localhost:3000/
});

// Include route files
const usersRoute = require('./routes/users');
const productsRoute = require('./routes/products');
const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register');
// Use routes
app.use('/users', usersRoute);
app.use('/products', productsRoute);
app.use('/login', loginRoute);
app.use('/register', registerRoute);
const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log('Server is running on port ${port}');

});