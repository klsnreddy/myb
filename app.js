// The main file.
var express = require('express');
var ejs = require("ejs");
var mongoose = require('mongoose');  
var bodyParser = require('body-parser');
//Winston logger
var winston = require('winston');
var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.File)({
      name: 'debug-file',
      filename: 'filelog-debug.log',
      level: 'debug'
    }),
    new (winston.transports.File)({
      name: 'info-file',
      filename: 'filelog-info.log',
      level: 'info'
    }),
    new (winston.transports.File)({
      name: 'error-file',
      filename: 'filelog-error.log',
      level: 'error'
    })
  ]
});

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

app.get('/admin', function(req, res) {
    res.render('admin');
});

app.post('/auth', function(req, res) {
  var admin = req.body
  // logger.debug(req.body)
  if(admin.username == 'admin' &&
    admin.password == 'admin')
    res.json({'code': '0', 'msg': 'Authenticated.'})
  else
    res.json({'code': '101', 'msg': 'Authentication failed.'})
});




//Menu page.
var menuSchema = require('./lib/menuSchema.js');
var menu = require('./lib/menu.js');
menu(app, menuSchema(mongoose), logger);

//Customers page.
var customerSchema = require('./lib/customerSchema.js');
var customer = require('./lib/customer.js');
customer(app, customerSchema(mongoose), logger);

//Orders
var orderSchema = require('./lib/orderSchema.js');
var order = require('./lib/order.js');
order(app, orderSchema(mongoose), logger);

app.listen(port); 
