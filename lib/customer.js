module.exports = function(app, Customers) {
	
    //This queries the Customers collection
	app.get('/customer/lookup/:mtn', function(req, res) {
	   customers.find({}, function(err, mns) {	
          if(err) console.log(err);
          res.json(mns);
        });	
	});
	
	app.post('/customer/save', function(req, res) {
//        console.log(req.body);
		var customer = new Customers(req.body);
        customer.save(function (err, data) {
            if (err) console.log("data");
            else res.json({'code': '0'});
        });
	});
	
	app.delete('/api/person/:id', function(req, res) {
		// delete from the database
	});
	
}