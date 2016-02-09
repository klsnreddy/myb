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


Menu.controller('MenuCtrl', ['$scope',
  function ($scope) {
    this.menu = menu;
    
    this.addItem = function() {
        var count = jQuery(this).val();
        var cat = jQuery(this).data("cat");
        var subCat = jQuery(this).data("sub-cat");
        var item = jQuery(this).data("item");
    }
      
}]);



jQuery(document).ready(function() {
    
    /* Category Level */
    //Minify/show the Sub Categories once click on Category name.
    jQuery('ul.category-name').click(function() {
        jQuery(this).siblings('ul.category-name-minified').show();
        jQuery(this).hide();
        jQuery(this).siblings('div.sub-cat').hide();
    });
    
    //Expand/hide the Sub Categories once click on Category name.
    jQuery('ul.category-name-minified').click(function() {
        jQuery(this).siblings('ul.category-name').show();
        jQuery(this).hide();
        jQuery(this).siblings('div.sub-cat').show();
    });
    
    
    /* Sub Category level */
    //Minify/show the Items once click on Sub category name.
    jQuery('ul.sub-cat-name').click(function() {
        jQuery(this).siblings('ul.sub-cat-name-minified').show();
        jQuery(this).hide();
        jQuery(this).siblings('ul.items').hide();
    });
    
    //Expand/hide the Items once click on Sub category name.
    jQuery('ul.sub-cat-name-minified').click(function() {
        jQuery(this).siblings('ul.sub-cat-name').show();
        jQuery(this).hide();
        jQuery(this).siblings('ul.items').show();
    });
    
    
    //Update Item Count on change.
    /*jQuery(".itemCount").change(function() {
        var count = jQuery(this).val();
        var cat = jQuery(this).data("cat");
        var subCat = jQuery(this).data("sub-cat");
        var item = jQuery(this).data("item");
    });*/
});