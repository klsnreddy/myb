module.exports = function(app, Orders) {
	
    //This queries the Customers collection
	app.get('/order/lookup/:mtn', function(req, res) {
	   customers.find({}, function(err, mns) {	
          if(err) console.log(err);
          res.json(mns);
        });	
	});
	
	app.post('/order', function(req, res) {
//        console.log(req.body);
		var order = new Orders(req.body);
        order.save(function (err, data) {
            if (err) console.log(err);
            else res.json({'code': '0'});
        });
	});
	
	app.delete('/api/person/:id', function(req, res) {
		// delete from the database
	});
	
}