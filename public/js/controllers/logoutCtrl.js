angular.module('logoutCtrl', []).controller('logoutController', function($rootScope,$scope, $http, $location){
  $scope.logout= function()
  {
     $http.get("/logout").success(function(){
       $location.path('/');
     });
  };
});
