angular.module('myApp', ['ngRoute', 'myApp.controllers'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'MainController',
    templateUrl: 'views/home.html'
  })
  .when('/login', {
    controller: 'LoginController',
    templateUrl: 'views/login.html'
  })
  .otherwise({redirectTo: '/'});
}]);
