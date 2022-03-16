'use strict';

let express = require('express');
let app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Load environment variables from .env file
require('dotenv').config({
    path: './.env'
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));

let routes = require('./routes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'});
});

let port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("API server started on port " + port);
});