angular.module('paymentCtrl', []).controller('paymentController', function($scope, $http) {
    $scope.tagline = 'Pay now!';

    var e = sessionStorage.getItem('nOfS');
    var f = sessionStorage.getItem('cls');
    var g = sessionStorage.getItem('Amt');

    document.getElementById('tkt').innerHTML= e;
    document.getElementById('cls').innerHTML= f;
    document.getElementById('amt').innerHTML= g;


    var mapping = function(){
     $http.get('/mapping/getMapping').success(function(response) {
          $scope.mapList = response;
        });
};

    var refresh = function() {
        $http.get('/payment/getPayment').success(function(response) {
            console.log('READ IS SUCCESSFUL');
            $scope.payList = response;
            $scope.payment = "";
        });
    };
    refresh();

         $scope.addPayment = function() {
                 $http.post('/payment/addPayment/',$scope.payment).success(function(response){
                     console.log(response);
                     console.log(" Paid Successfully....");
                     alert('Paid Successfully....');
                     refresh();

                 });
    }
  });
