//Main Controller
Main.controller('MainCtrl', ['$scope', '$log', '$http', 
    function($scope, $log, $http) {
        
}]);


//Todo controller
Main.controller('TodosListCtrl', ['$scope', '$http',
function ($scope, $http) {
    
    $http.get('/tasks')
        .success(function (result) {
            $scope.tasks = result;
        })
        .error(function (data, status) {
            console.log(data);
        });

}]);


//Menu Controller
Main.controller('MenuCtrl', ['$scope','$log', '$http', '$MenuService',
  function ($scope, $log, $http, $MenuService) {
    if($MenuService.menu == undefined) {
        $http.get('/menu')
            .success(function (result) {
                $scope.menu = result;
                $MenuService.menu = $scope.menu;
            })
            .error(function (data, status) {
                console.log(data);
            });
    } else {
        $scope.menu = $MenuService.menu;
    }
      
}]);


//Check Out Controller
Main.controller('CheckOutCtrl', ['$scope','$log', '$http', '$MenuService',
  function ($scope, $log, $http, $MenuService) {
    
    $scope.order = $MenuService.menu;
      
}]);