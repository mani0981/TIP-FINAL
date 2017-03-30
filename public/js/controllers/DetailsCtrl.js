angular.module('DetailsCtrl', []).controller('DetailsController', function($scope, $http, $rootScope, $location){
    //
    // $scope.city=" ";
    // $scope.date=" ";
    // $scope.Theatre=" ";
    // $scope.showtime=" ";
    //

var mapping = function(){
 $http.get('/mapping/getMapping').success(function(response) {
      $scope.mapList = response;
    });

    $http.get('/city/getCity').success(function(response) {
        $scope.citiList = response;
      });
$http.get('/theatre/getTheatre').success(function(response) {
  $scope.theatList = response;
});
};
mapping();


var bookingShow=function(){
var data=sessionStorage.getItem('selectedmovie');

$http.get('/mapping/selmoviename/'+data).success(function(response){
  $scope.details=response;
});
$http.get('/movie/moviePoster/'+data).success(function(response){
 $rootScope.movi=response;
 sessionStorage.setItem('moviedata',$rootScope.movi);
 });
};

bookingShow();
$scope.movDates=[];
var showDates=function() {
for(i=0;i<6;i++)
{
  var date = new Date();
  date.setDate(date.getDate()+i);
  $scope.movDates[i]=date;
}
};
showDates();
 // $scope.setShow =function(){
 //  sessionStorage.setItem('thr',  $scope.Theatre);
 //  sessionStorage.setItem('city', $scope.city);
 //  sessionStorage.setItem('shotim', $scope.showtime);
 //  sessionStorage.setItem('dt', $scope.date);
 //  $location.path('/payment');
 //  };
});
