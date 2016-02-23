var express = require('express');
var ejs = require("ejs");
//var db = require('./lib/db');
var mongoose = require('mongoose');  
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;

//Setting express variables.
app.engine("html", ejs.renderFile);
app.set('view engine', 'html');
app.use('/assets', express.static(__dirname + '/public'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies With body-parser configured, we can now create our route:

mongoose.connect('mongodb://ec2-52-35-197-90.us-west-2.compute.amazonaws.com:27017/myb');
//mongoose.connect('mongodb://localhost:27017/myb');

app.get('/', function(req, res) {
    res.render('index');
});


//Menu page.
var menuSchema = require('./lib/menuSchema.js');
var menu = require('./lib/menu.js');
menu(app, menuSchema(mongoose));

//Customers page.
var customerSchema = require('./lib/customerSchema.js');
var customer = require('./lib/customer.js');
customer(app, customerSchema(mongoose));

app.listen(port); 
