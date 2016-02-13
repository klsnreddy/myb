var express = require('express');
var ejs = require("ejs");
//var db = require('./lib/db');
var mongoose = require('mongoose');  
var app = express();

var port = process.env.PORT || 3000;

//Setting express variables.
app.engine("html", ejs.renderFile);
app.set('view engine', 'html');
app.use('/assets', express.static(__dirname + '/public'));

mongoose.connect('mongodb://ec2-52-35-197-90.us-west-2.compute.amazonaws.com:27017/myb');
//mongoose.connect('mongodb://localhost:27017/myb');

//Home Page
var Schema = mongoose.Schema;
var tasksSchema = new Schema({
    text: String
});
var tasks = mongoose.model('tasks', tasksSchema);

app.get('/', function(req, res) {
    tasks.find({}, function(err, tsks) {	
      if(err) console.log(err);
      res.render('index');
    });	
});

app.get('/tasks', function(req, res) {
    tasks.find({}, function(err, tsks) {	
      if(err) console.log(err);
      res.json(tsks);
    });	
});

//Menu page.
var menuSchema = require('./lib/menuSchema.js');
var menu = require('./lib/menu.js');
menu(app, menuSchema(mongoose));

app.listen(port); 
