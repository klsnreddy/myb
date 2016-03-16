//Services
Main.service("$MybService", ['$http', '$state', '$log', function($http, $state, $log) {
   var mybSvs = this;
   mybSvs.menu = undefined;
   mybSvs.customer = undefined;
   mybSvs.registered = false;
   mybSvs.errorMsg = undefined;
   mybSvs.admin = undefined;
   
   //Register the customer
   mybSvs.registerCustomer = function() {
       mybSvs.errorMsg = undefined;
       
       if( mybSvs.registered == undefined || ! mybSvs.registered) {
           var cust = mybSvs.customer;
           
           if(cust.mtn == undefined || cust.mtn == '') {
               mybSvs.errorMsg = 'Please provide mtn';
               $state.go('home');
           }
           
           $http.post('/customer/save', cust)
                .success(function(data, status) {
                    mybSvs.registered = true;
                    $state.go('menu');
                })
                .error(function(data, status) {
                    $log.info(status);
                    mybSvs.errorMsg = status + " Failed to register the customer : " + cust.mtn;
                    $state.go('home');
                });
           
       } else {
           $state.go('menu');
       }
   }
   
   
   mybSvs.lookupCustomer = function() {
       var cust = mybSvs.customer
       
       if(cust.mtn == undefined || cust.mtn == '') {
           mybSvs.errorMsg = 'Please provide mtn'
           $state.go('home')
       }
       
       $http.get('/customer/lookup/' + cust.mtn)
           .success(function(data, status) {
                if(data.mtn !== undefined) {
                  mybSvs.customer = data
                  $state.go('menu')  
                } else {
                  $state.go('home')
                }
                
           })
           .error(function(data, status) {
                $log.info(status)
                mybSvs.errorMsg = status + " Failed to register the customer : " + cust.mtn
                $state.go('home')
            });
   }

   mybSvs.authenticate = function() {
    $http.post('/auth', mybSvs.admin)
        .success(function(data, status) {
          if(data.code == '0')
            $state.go('orders')
          else
            $state.go('admin')
        })
        .error(function(data, status) {
          $state.go('admin')
        })

   }
   
}]);

Main.service("$OrderService", ['$http', '$state', '$log', '$MybService', function($http, $state, $log, $MybService) {
   var orderSvs = this;
   orderSvs.errorMsg = undefined;
   orderSvs.order = undefined;
   orderSvs.orderTotal = 0.00;
   orderSvs.orderSaved = false;
   
    orderSvs.addToOrder = function(item) {
        orderSvs.orderSaved = false;
        if(item.count !== undefined && item.count > 0) {
          if(orderSvs.order == undefined)
              orderSvs.order = {};
          var order = orderSvs.order;
          if(order[item.id] == undefined)
              order[item.id] = {
                  'id': item.id,
                  'name': item.name,
                  'price': parseFloat(item.price),
                  'count': parseInt(item.count),
              }
          else {
              var orderedItem = order[item.id];
              if(orderedItem.count !== parseInt(item.count)) {
                  orderedItem.count = parseInt(item.count);
              } else
                  return;
          }
          order[item.id].total = Math.round(order[item.id].count * order[item.id].price * 1e2 ) / 1e2;

          orderSvs.orderTotal = 0.00;
          for(var prop in order)
              if(order.hasOwnProperty(prop))
                  orderSvs.orderTotal += order[prop].total;
          orderSvs.orderTotal = Math.round(orderSvs.orderTotal * 1e2 ) / 1e2;
        }
    }
    
    //Submit Order
   orderSvs.submitOrder = function() {
       var cust = $MybService.customer;
       
       //populate the order object.
       var order = {};
       order.mtn = cust.mtn;
       order.firstname = cust.firstname;
       order.lastname = cust.lastname;
       order.total = orderSvs.orderTotal;
       order.status = 0;
       order.createdDate = new Date();
       order.modifiedDate = new Date();
       order.fulfillDate = new Date();
       order.items = Object.keys(orderSvs.order).map(function(key) { return orderSvs.order[key] });
       
       //Save the order
       $http.post('/order', order)
            .success(function(data, status) {
                if(data.code !== undefined && data.code === '0') {
                  orderSvs.orderSaved = true
                  orderSvs.order = undefined
                  $log.info("Order saved successfully")
                  orderSvs.errorMsg = undefined
                  $state.go('success')
                } else {
                  orderSvs.errorMsg = data.errorMsg
                  $state.go('review')
                }


            })
            .error(function(data, status) {
                orderSvs.orderSaved = false
                orderSvs.errorMsg = data.errorMsg
                $log.info("Order save failed: "+status)
                $state.go('review')
            });
   }
   
}]);