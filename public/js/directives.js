Main.directive("itemList", function() {
   return {
       restrict: 'AECM',
       controller: 'MenuCtrl',
       templateUrl: 'assets/layout/itemList.html',
       replace: true,
       scope: {
           sub: "="
//           ,addToOrder : "&"
       },
      link: function(scope, element, attrs) {
           //Sub Category level 
            //Minify/show the Items once click on Sub category name.
            $('ul.sub-cat-name').click(function() {
                $(this).siblings('ul.sub-cat-name-minified').show();
                $(this).hide();
                $(this).siblings('ul.items').hide();
            });

            //Expand/hide the Items once click on Sub category name.
            $('ul.sub-cat-name-minified').click(function() {
                $(this).siblings('ul.sub-cat-name').show();
                $(this).hide();
                $(this).siblings('ul.items').show();
            });
       }
       /*compile: function(element, attrs) {
          //Sub Category level 
                    //Minify/show the Items once click on Sub category name.
                    $('ul.sub-cat-name').click(function() {
                        $(this).siblings('ul.sub-cat-name-minified').show();
                        $(this).hide();
                        $(this).siblings('ul.items').hide();
                    });

                    //Expand/hide the Items once click on Sub category name.
                    $('ul.sub-cat-name-minified').click(function() {
                        $(this).siblings('ul.sub-cat-name').show();
                        $(this).hide();
                        $(this).siblings('ul.items').show();
                    });
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
       }*/
       
   }
});