/*(function() {*/
    
    // ROUTES
    /*Main.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: 'assets/layout/todo.html',
                controller: 'TodosListCtrl'
            })
            .state("menu", {
                url: "/menu",
                templateUrl: 'assets/layout/menu.html',
                controller: 'MenuCtrl'
            })
            .state("order", {
                url: "/order",
                templateUrl: 'assets/layout/order.html',
                controller: 'OrderCtrl'
            })

        $urlRouterProvider.otherwise('home');
    });*/


    Main.config(function ($routeProvider) {
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
        
        
    });

    /*Menu.config(function ($routeProvider) {

        $routeProvider

        .when('/', {
            templateUrl: 'views/index.html',
            controller: 'TodosListCtrl'
        })

        .when('/menu', {
            alert('one');
            templateUrl: 'views/menu.html',
            controller: 'MenuCtrl'
        })

        .when('/second/:num', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })

    });*/
    
/*})();*/