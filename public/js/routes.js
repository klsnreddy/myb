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
            .state("review", {
                url: "/review",
                templateUrl: 'assets/layout/review.html',
                controller: 'ReviewCtrl'
            })
            .state("review.order", {
//                url: "/review",
                templateUrl: 'assets/layout/success.html',
                controller: 'OrderCtrl'
            })
            .state("customer", {
//                url: "/menu",
                templateUrl: 'assets/layout/menu.html',
                controller: 'MenuCtrl'
            })

        $urlRouterProvider.otherwise('home');
    });
