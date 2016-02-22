/*(function() {*/
    
    // ROUTES
    Main.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: 'assets/layout/home.html',
                controller: 'HomeCtrl'
            })
            .state("menu", {
                url: "/menu",
                templateUrl: 'assets/layout/menu.html',
                controller: 'MenuCtrl'
            })
            .state("checkOut", {
                url: "/checkOut",
                templateUrl: 'assets/layout/checkOut.html',
                controller: 'CheckOutCtrl'
            })

        $urlRouterProvider.otherwise('home');
    });


    /*Main.config(function ($routeProvider) {
        $routeProvider

        .when('/', {
            templateUrl: 'assets/layout/todo.html',
            controller: 'TodosListCtrl'
        })

        .when('/menu', {
            templateUrl: 'assets/layout/menu.html',
            controller: 'MenuCtrl'
        })

        .when('/checkOut', {
            templateUrl: 'assets/layout/checkOut.html',
            controller: 'CheckOutCtrl'
        })
        
        
    });*/

    
    
/*})();*/