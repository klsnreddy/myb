module.exports = function(app, menus, logger) {
	
    //This queries the Menu collection
	app.get('/menu', function(req, res) {
	   menus.find({}, function(err, mns) {	
          if(err) logger.debug(err);
          res.json(mns);
        });	
	});
	
	app.post('/api/person', function(req, res) {
		// save to the database
	});
	
	app.delete('/api/person/:id', function(req, res) {
		// delete from the database
	});
	
}