angular.module('myApp', ['ngRoute', 'myApp.controllers', 'myApp.directives'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);
  $routeProvider.when('/', {
    controller: 'MainController'
    // templateUrl: 'views/home.html'
  })
  .when('/login', {
    controller: 'LoginController',
    templateUrl: 'views/login.html'
  })
  .otherwise({redirectTo: '/'});
}]);


/*

- using link w/ directive
- hashbang issue w/ router

*/