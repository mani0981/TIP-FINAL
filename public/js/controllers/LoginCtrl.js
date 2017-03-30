angular.module('LoginCtrl', []).controller('LoginController', function($scope, $http, $rootScope,$location) {

  $scope.login= function (user){
    console.log(user);
    $http.post('/login' , user).success(function(response){
      $location.path('/');
      console.log(response);
      $rootScope.currentUser = user;
    });

  };

});
