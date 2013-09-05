var app = angular.module('myApp', []);
app.run(function($rootScope){
  $rootScope.name = 'ed hashish';
});

app.controller('MyController', function($scope) {
  $scope.person = {
    name: 'bo peep'
  };
  var updateClock = function() {
    $scope.clock = new Date();
  };
  var timer = setInterval(function() {
    $scope.$apply(updateClock);
  }, 1000);
  updateClock();
});

app.controller('PlayerController', ['$scope', function($scope){
  $scope.playing = false;
  $scope.audio = document.createElement('audio');
  $scope.audio.src = 'http://o5wap.ru/content/mp3/full/8/8/a/Flo_Rida_-_Whistle.mp3';
  $scope.play = function() {
    $scope.audio.play();
    $scope.playing = true;
  };
  $scope.stop = function() {
    $scope.audio.pause();
    $scope.playing = false;
  };
  $scope.audio.addEventListener('ended', function(){
    $scope.$apply(function(){
      $scope.stop();
    });
  });
}]);

app.controller('RelatedController', ['$scope', function($scope){

}]);

app.controller('DemoController', function($scope){
  $scope.counter = 0;
  $scope.add = function(amount) {$scope.counter += amount;};
  $scope.subtract = function(amount) {$scope.counter-= amount;};
});

app.controller('httpController', ['$scope', '$http', function($scope, $http){
  $http({
    method: 'JSONP',
    url: 'http://api.openbeerdatabase.com/v1/beers.json?callback=JSON_CALLBACK'
  }).success(function(data, status, headers, config) {
    $scope.beerdata = data;
    // data contains the response
    // status is the HTTP status
    // headers is the header getter function
    // config is the object that was used to create the HTTP request
  }).error(function(data, status, headers, config) {
  });
}]);