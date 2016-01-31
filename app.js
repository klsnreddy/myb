var express = require('express');
var ejs = require("ejs");
var db = require('./lib/db');
var mongoose = require('mongoose');  
var app = express();

var port = process.env.PORT || 3000;

var people = [
	{
		name: 'John Doe'
	},
	{
		name: 'Jane Doe'
	},
	{
		name: 'Jim Doe'
	}
];

app.engine("html", ejs.renderFile);
app.set('view engine', 'html');
app.use('/assets', express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost:27017/myb');
var Schema = mongoose.Schema;
var tasksSchema = new Schema({
    text: String
});
var tasks = mongoose.model('tasks', tasksSchema);

app.get('/', function(req, res) {
    tasks.find({}, function(err, tsks) {	
      if(err) console.log(err);
      console.log(tsks);
      res.render('index', {tasks : tsks});
    });	
});

app.listen(port); 
