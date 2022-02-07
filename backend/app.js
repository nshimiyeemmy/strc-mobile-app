const express = require('express');
const app = express();

const bodyParser = require('body-parser');


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Importing all the routes

// const users = require('./routes/userAuth');

//doing routing

// app.use('/api/v1', users);

module.exports = app;