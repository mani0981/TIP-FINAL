angular.module('MappingCtrl', []).controller('MappingController', function($scope, $http) {

    $scope.tagline = 'Mapping!';
      var refresh = function(){

      $http.get('/city/getCity').success(function(response) {
      $scope.citiList = response;
    });
      $http.get('/theatre/getTheatre').success(function(response) {
      $scope.theatList = response;
    });
      $http.get('/movie/getMovie').success(function(response) {
      $scope.moviList = response;
    });
      $http.get('/showtime/getShowtime').success(function (response) {
      $scope.stList = response;
    });

        $http.get('/mapping/getMapping').success(function(response) {
            console.log('Mapping READ IS SUCCESSFUL');
            $scope.mapList = response;
            $scope.map = "";
          });
        };
        refresh();

              $scope.addMapping = function() {
                 $http.post('/mapping/addMapping/', $scope.map).success(function(response){
                     console.log(response);
                     console.log("Mapping added Successfully....");
                     refresh();
                 });
                 var val="true";
                 $http.put('/movie/updateMovie/' + $scope.map.mapMovie+'/'+val).success(function(response) {
                     console.log(response);
                });
            };

              $scope.removeMapping = function(map) {
                  $http.delete('/mapping/deleteMapping/' + map._id).success(function(response) {
                      console.log(response);
                      console.log('MAPPING DELETED SUCCESSFULLY');
                      refresh();
                  });
                  var val="false";
                  $http.put('/movie/updateMovie/'+map.mapMovie+'/'+val).success(function(response) {
                    console.log(response);
                  });
              };


});
