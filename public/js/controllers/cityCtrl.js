angular.module('cityCtrl', []).controller('cityController', function($scope, $http) {
    $scope.tagline = 'select your city here!';

    var refresh = function() {
        $http.get('/city/getCity').success(function(response) {
            console.log('READ IS SUCCESSFUL');
            $scope.citiList = response;
            $scope.citi = "";
        });
    };
    refresh();

         $scope.addCity = function() {
                 $http.post('/city/addCity/',$scope.city).success(function(response){
                     console.log(response);
                     console.log("City added Successfully....");
                     refresh();

                 });
    };

    $scope.removeCity = function(citi) {
        $http.delete('/city/deleteCity/' + citi._id).success(function(response) {
            console.log(response);
            console.log('CITY DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editCity = function(city) {
        $http.get('/city/getCity/' + city._id).success(function(response) {
            $scope.city = response[0];
            console.log($scope.city);
        });
    };

    $scope.updateCity = function() {
        console.log("REACHED UPDATE");
        console.log($scope.city._id);
        $http.put('/city/updateCity/' + $scope.city._id, $scope.city).success(function(response) {
            console.log(response);
            refresh();
        })
    }
});
