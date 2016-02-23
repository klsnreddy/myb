//Main Controller
Main.controller('MainCtrl', ['$scope', '$log', '$http', 
    function($scope, $log, $http) {
        
}]);


//Todo controller
Main.controller('HomeCtrl', ['$scope', '$http', '$MybService',
function ($scope, $http, $MybService) {
    
    if($MybService.customer == undefined) {
        $MybService.customer = {};                     
    }
    $scope.customer = $MybService.customer;
}]);


//Menu Controller
Main.controller('MenuCtrl', ['$scope','$log', '$http', '$MybService',
  function ($scope, $log, $http, $MybService) {
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
      
}]);


//Check Out Controller
Main.controller('CheckOutCtrl', ['$scope','$log', '$http', '$MybService',
  function ($scope, $log, $http, $MybService) {
    
    $scope.order = $MybService.menu;
      
}]);