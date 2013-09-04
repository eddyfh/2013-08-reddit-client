var app = angular.module('myApp', []);
app.run(function($rootScope){
  $rootScope.name = 'ed hashish';
});

app.controller('MyController', function($scope) {
  $scope.person = {
    name: 'bo peep'
  };
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