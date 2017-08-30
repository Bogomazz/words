var app = angular.module('app', ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.when('/auth',
            {
                templateUrl:'/app/components/auth/auth.view.html',
                controller:'AuthController'
            });

        $routeProvider.otherwise({redirectTo: '/auth'});
    });