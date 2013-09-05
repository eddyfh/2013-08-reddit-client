angular.module('myApp.controllers', [])
.controller('MainController', ['$scope', '$http', function($scope, $http){
  $http({
    method: 'JSONP',
    url: 'http://api.reddit.com/r/funny.json?jsonp=JSON_CALLBACK'
  }).success(function(data){
    $scope.redditData = data.data.children;
  }).error(function(data, status){
    console.log('ERROR!');
  });
  $scope.votes = {};
  $scope.upvote = function(index){
    if ($scope.votes[index]=== undefined){
      $scope.votes[index] = 1;
    } else {
      $scope.votes[index]+=1;
    }
  };
  $scope.downvote = function(index){
    if ($scope.votes[index]=== undefined){
      $scope.votes[index] = -1;
    } else {
      $scope.votes[index]-=1;
    }
  };
  $scope.displayVote = function(index){
    return $scope.votes[index] || 0;
  };
}]);
