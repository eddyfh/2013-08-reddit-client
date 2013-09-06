angular.module('myApp.directives', [])
.directive('showStories', function() {
  return {
    restrict: 'A',
    // require: ['^ngModel'],
    replace: true,
    // scope: {
    //   ngModel: '='
    //   // play: '&'
    // },
    // template: '<h1>hi</h1>',
    templateUrl: '/views/home.html',
    controller: ['$scope', '$http', function($scope, $http){
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
      }]
    // link: function(scope, ele, attr) {
    //   // $scope.redditData =
    // }
  };
});