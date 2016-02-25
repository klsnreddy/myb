//Services
Main.service("$MybService", ['$http', function($http) {
   var mybSvs = this;
   mybSvs.menu = undefined;
   mybSvs.customer = undefined;
   mybSvs.registered = false;
   mybSvs.errorMsg = undefined;
   
   //Register the customer
   mybSvs.registerCustomer = function() {
       mybSvs.errorMsg = undefined;
       
       if( mybSvs.registered == undefined || ! mybSvs.registered) {
           var cust = mybSvs.customer;
           
           if(cust.mtn == undefined || cust.mtn == '') {
               mybSvs.errorMsg = 'Please provide mtn';
               return false;
           }
           
           $http.post('/customer/save', cust)
                .success(function(data, status) {
                    mybSvs.registered = true;
                    return true;
                })
                .error(function(data, status) {
                    console.log(status);
                    mybSvs.errorMsg = status + " Failed to register the customer : " + cust.mtn;
                    return false;
                });
           
       }
       return true;
   }
   
   
}]);

Main.service("$OrderService", ['$http', function($http) {
   var orderSvs = this;
   orderSvs.errorMsg = undefined;
   orderSvs.order = undefined;
   orderSvs.orderTotal = 0.00;
   
    orderSvs.addToOrder = function(item) {
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
   
}]);