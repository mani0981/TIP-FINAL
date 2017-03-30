angular.module('TheatreCtrl', []).controller('TheatreController', function($scope, $http) {

    $scope.tagline = 'select  Theatre!';
var refresh = function(){
  $http.get('/city/getCity').success(function(response) {
  $scope.citiList = response;
  });

        $http.get('/theatre/getTheatre').success(function(response) {
            console.log('READ IS SUCCESSFUL');
            $scope.theatList = response;
            $scope.theat = "";
          });
    };
    refresh();

              $scope.addTheatre = function(theat) {
                 $http.post('/theatre/addTheatre', theat).success(function(response){
                     console.log(response);
                     console.log("Theatre added Successfully....");
                     refresh();

                 });
               };

    $scope.removeTheatre = function(theat) {

        $http.delete('/theatre/deleteTheatre/' + theat._id).success(function(response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editTheatre = function(theat) {
        $http.get('/theatre/getTheatre/' + theat._id).success(function(response) {
            $scope.theat = response[0];
            console.log($scope.theat);
        });
    };

    $scope.updateTheatre= function() {
        console.log("REACHED UPDATE");
        console.log($scope.theat._id);
        $http.put('/theatre/updateTheatre/' + $scope.theat._id, $scope.theat).success(function(response) {
            console.log(response);
            refresh();
        })
    }

});
