//Main Controller
Main.controller('MainCtrl', 
                ['$scope', '$log', '$http',
    function ($scope, $log, $http) {
    }]);


//Admin Controller
Main.controller('AdminCtrl', ['$scope', '$http', '$log', '$MybService', 
    function($scope, $http, $log, $MybService) {

        if($MybService.admin == undefined) {
            $MybService.admin = {};                     
        }
        $scope.admin = $MybService.admin;

    }]);

//Auth Controller
Main.controller('AuthCtrl', ['$scope', '$http', '$log', '$state', '$MybService', 
    function($scope, $http, $log, $state, $MybService) {

        if($MybService.admin == undefined || 
            $MybService.admin.username == undefined ||
            $MybService.admin.password == undefined) {
            $scope.errorMsg = "Please provide UserName and Password."
            $state.go('admin')
        } else {
            $MybService.authenticate()
        }
        

    }]);

//Home controller
Main.controller('HomeCtrl', ['$scope', '$http', '$MybService',
    function ($scope, $http, $MybService) {
    
        if($MybService.customer == undefined) {
            $MybService.customer = {};                     
        }
        $scope.customer = $MybService.customer;
}]);



//Customer Register Controller
Main.controller('CustCtrl', ['$scope', '$MybService',
  function ($scope, $MybService) {
    //Register the customer
      $MybService.registerCustomer()
}]);

//Customer Lookup Controller
Main.controller('LookupCtrl', ['$scope', '$MybService',
  function ($scope, $MybService) {
    //Lookup customer
      $MybService.lookupCustomer()
}]);

//Menu Controller
Main.controller('MenuCtrl', ['$scope','$log', '$http', '$MybService', '$OrderService',
  function ($scope, $log, $http, $MybService, $OrderService) {
    //Register the customer
    if(!$MybService.registerCustomer())   {
        $scope.errorMsg = $MybService.errorMsg;
    }
      
    if($MybService.menu == undefined) {
        $http.get('/menu')
            .success(function (result) {
                $scope.menu = result;
                $MybService.menu = $scope.menu;
            })
            .error(function (data, status) {
                console.log(data);
            });
    } else {
        $scope.menu = $MybService.menu;
    }
    
    //Update the order object 
    $scope.addToOrder = $OrderService.addToOrder;
}]);


//Review Controller
Main.controller('ReviewCtrl', ['$scope','$log', '$http', '$OrderService',
  function ($scope, $log, $http, $OrderService) {
    
    $scope.order = $OrderService.order
    $scope.orderTotal = $OrderService.orderTotal
    $scope.orderSaved = $OrderService.orderSaved  
}]);


//Check Out Controller
Main.controller('OrderCtrl', ['$scope','$log', '$http', '$state', '$MybService', '$OrderService', 
  function ($scope, $log, $http, $state, $MybService, $OrderService) {
    
    $OrderService.submitOrder()
      
}]);