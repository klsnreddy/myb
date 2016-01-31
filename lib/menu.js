module.exports = function(app, menus) {
	
    //This queries the Menu collection
	app.get('/menu', function(req, res) {
	   menus.find({}, function(err, mns) {	
          if(err) console.log(err);
          console.log(menus);
          res.render('menu', {menu : mns});
        });	
	});
	
	app.post('/api/person', function(req, res) {
		// save to the database
	});
	
	app.delete('/api/person/:id', function(req, res) {
		// delete from the database
	});
	
}