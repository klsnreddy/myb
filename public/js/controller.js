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
Main.controller('MenuCtrl', ['$scope','$log', '$http',
  function ($scope, $log, $http) {
    
    $http.get('/menu')
        .success(function (result) {
            $scope.menu = result;
            window.mc1 = $scope.menu;
        })
        .error(function (data, status) {
            console.log(data);
        });
      
}]);
