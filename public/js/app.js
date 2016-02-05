// This code only runs on the client
  angular.module('simple-todos',[]);
 
  angular.module('simple-todos').controller('TodosListCtrl', ['$scope',
    function ($scope) {
      $scope.tasks = tasks;
     /*
 $scope.tasks = [
        { text: 'This is task 1' },
        { text: 'This is task 2' },
        { text: 'This is task 3' }
      ];
*/
  }]);


//Menu Page
var Menu = angular.module('Menu',[]);
 
  Menu.controller('MenuCtrl', ['$scope',
    function ($scope) {
      this.menu = menu;
  
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
    
});