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
            .state("submit", {
                controller: 'OrderCtrl'
            })
            .state("success", {
                url: "/success",
                templateUrl: 'assets/layout/success.html'
            })
            .state("customer", {
                controller: 'CustCtrl'
            })
            .state("lookup", {
                controller: 'LookupCtrl'
            })
            .state("admin", {
                url: '/admin',
                templateUrl: 'assets/layout/admin.html',
                controller: 'AdminCtrl'
            })
            .state("auth", {
                controller: 'AuthCtrl'
            })
            .state("orders", {
                url: '/orders',
                templateUrl: 'assets/layout/orders.html',
                controller: 'OrdersCtrl'
            })

        $urlRouterProvider.otherwise('home');
    });
