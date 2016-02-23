//Services
Main.service("$MybService", ['$http', function($http) {
   var menuSvs = this;
   menuSvs.menu = undefined;
   menuSvs.customer = undefined;
   menuSvs.registered = false;
   menuSvs.errorMsg = undefined;
   
   //Register the customer
   menuSvs.registerCustomer = function() {
       menuSvs.errorMsg = undefined;
       
       if( menuSvs.registered == undefined || ! menuSvs.registered) {
           var cust = menuSvs.customer;
           
           if(cust.mtn == undefined || cust.mtn == '') {
               menuSvs.errorMsg = 'Please provide mtn';
               return false;
           }
           
           $http.post('/customer/save', cust)
                .success(function(data, status) {
                    menuSvs.registered = true;
                    return true;
                })
                .error(function(data, status) {
                    console.log(status);
                    menuSvs.errorMsg = status + " Failed to register the customer : " + cust.mtn;
                    return false;
                });
           
       }
       return true;
   }
}]);