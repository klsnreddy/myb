//Config Variable.
var MYB = {};
MYB.order = {};
MYB.order.cat = [];


// This code only runs on the client
  angular.module('simple-todos',[]);
 
  angular.module('simple-todos').controller('TodosListCtrl', ['$scope',
    function ($scope) {
      $scope.tasks = tasks;
  }]);


//Menu Page
var Menu = angular.module('Menu',['ngRoute']);
 

Menu.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'views/index.html',
        controller: 'TodosListCtrl'
    })
    
    .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl'
    })
    
/*    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })*/
    
});


Menu.controller('MenuCtrl', ['$scope','$log',
  function ($scope, $log) {
    this.menu = menu;
    
    this.addItem = function($event) {
       /* var count = angular.element(this).val();
        var cat = jQuery(this).data("cat");
        var subCat = jQuery(this).data("sub-cat");
        var item = jQuery(this).data("item");
        alert(count);
        alert(cat);*/
        $log.debug($event);
        
    }
      
}]);


