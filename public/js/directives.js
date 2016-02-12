Menu.directive("itemList", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'assets/layout/itemList.html',
       replace: true,
       scope: {
           sub: "=",
       },
       compile: function(element, attrs) {
           return {
               pre: function (scope, element, attrs) {
                   console.log("pre-link");
                   console.log(scope);
               },
               post: function (scope, element, attrs) {
                   console.log("post-link");
                   console.log(scope);
               }
           }
       }
       
   }
});