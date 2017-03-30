angular.module('lastCtrl', []).controller('lastController', function($scope, $http) {
    $scope.tagline = 'Booking Summary!';

    var e = sessionStorage.getItem('nOfS');
    var f = sessionStorage.getItem('cls');
    var g = sessionStorage.getItem('Amt');

    document.getElementById('tkt').innerHTML= e;
    document.getElementById('cls').innerHTML= f;
    document.getElementById('amt').innerHTML= g;
});
