//load node modules
var express = require('express');
//initialise express
var app = express();
//render static files
app.use(express.static('public'));
//port website will run on
app.listen(8080);