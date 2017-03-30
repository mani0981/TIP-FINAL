
angular.module('ShowtimeCtrl', []).controller('ShowtimeController', function($scope, $http) {

    $scope.tagline = 'Enter show time!';

  var refresh = function () {
        $http.get('/showtime/getShowtime').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.stList = response;
            $scope.st = "";

        });
    };
     refresh();

       $scope.addShowtime = function () {
         $http.post('/showtime/addShowtime',$scope.st).success(function (response) {
              console.log(response);
              console.log("CREATE IS SUCCESSFUL");
              refresh();
        });
    };


    $scope.removeShowtime = function (st) {
        $http.delete('/showtime/deleteShowtime/' + st._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

     $scope.editShowtime = function (st) {
         $http.get('/showtime/getShowtime/' + st._id).success(function (response) {
             $scope.st = response[0];
             console.log($scope.st);
         });
     };

     $scope.updateShowtime = function () {
         console.log("REACHED UPDATE");
         console.log($scope.st._id);
         $http.put('/showtime/updateShowtime/' + $scope.st._id, $scope.st).success(function (response) {
             console.log(response);
             refresh();
         })
     }
});
