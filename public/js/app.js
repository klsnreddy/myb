/*angular.module('TestApp', []);

angular.module('TestApp')
	.controller('MainController', ctrlFunc);
	
function ctrlFunc() {
	this.people = clientPeople;
}*/

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
