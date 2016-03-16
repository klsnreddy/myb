module.exports = function(app, Customers, logger) {
	
    //This queries the Customers collection
	app.get('/customer/lookup/:mtn', function(req, res) {
        logger.debug(req.params.mtn)
	   Customers.find({'mtn': req.params.mtn}, function(err, cust) {
          if(err) res.json({'code': err.code, 'message': err.msg})
          else {
              if(cust.length > 0)
                  res.json(cust[0])
              else
                  res.json({'code': '101', 'msg': 'Customer Not found.'})
          }
        });	
	});
	
	app.post('/customer/save', function(req, res) {
//        logger.debug(req.body);
		var customer = new Customers(req.body)
        customer.save(function (err, data) {
            if (err) 
                if(err.code == 11000)
                    res.json({'code': '0'})
                else {
                    logger.debug(err)
                    res.json({'code': '101'})
                }
            else res.json({'code': '0'})
        });
	});
	
	app.delete('/api/person/:id', function(req, res) {
		// delete from the database
	});
	
}
