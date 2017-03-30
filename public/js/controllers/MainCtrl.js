angular.module('MainCtrl', []).controller('MainController', function($http, $scope, $location) {

    $scope.setMovie = function(movie){
    sessionStorage.setItem('selectedmovie',movie);
    $location.path('/Details');
  };
  $scope.moviList = [];
    
  $http.get('/movie/getMovie').success(function(response) {
    console.log('READ IS SUCCESSFUL');
    $scope.moviList_ = response;
    $scope.movi = "";

    //Assign Movie
    $http.get('/mapping/getMapping').success(function (response) {
    console.log('READ IS SUCCESSFUL');
    $scope.mapList = response;
    $scope.map = "";

    for(var i=0; i < $scope.mapList.length; i++){
      for(var j=0; j < $scope.moviList_.length; j++){
        if($scope.moviList_[j].moviTitle == $scope.mapList[i].mapMovie){
          $scope.moviList.push($scope.moviList_[j]);
          break;
          $scope.movieList = true;
          $scope.bookingWindow = true;
        }
      }
    }


    });
  });

});
