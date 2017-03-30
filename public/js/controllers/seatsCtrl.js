angular.module('seatsCtrl', []).controller('seatsController', function($scope, $http,  $location) {
  $scope.seats = 'seats';

  $("#selectClass").on('change', function() {
  if ($(this).val() == "250") {
     $(".slrCls").attr("disabled", "disabled");
  } else {
     $(".slrCls").removeAttr("disabled");
  }
});

  $("#selectClass").on('change', function() {
    if ($(this).val() == "120") {
   $(".gldCls").attr("disabled", "disabled");
 } else {
   $(".gldCls").removeAttr("disabled");
 }

  });

    var selectSeats = document.getElementById('selectSeats');
    $('input[type=checkbox]').on('change', function (e) {
    if ($('input[type=checkbox]:checked').length >= selectSeats.value ) {
        $(this).prop('checked', false);
        //alert("WANT MORE..? INCREASE NO. OF SEATS");
    }
});
        $('select[id="selectClass"]').change(function(){
            var text = $(this).find("option:selected").text();
            if(text != ""){
              text = "Buy"+text;
            }

            $('#seatCls').val(text);

          });

          function updateTextArea() {
     var allVals = [];
     $('#gold :checked').each(function() {
       allVals.push($(this).val());
     });
     $('#noOFSeats').val(allVals);
  }
 $(function() {
   $('#gold input').click(updateTextArea);
   updateTextArea();
 });

          $('.calculate').change(function(){
    var group = parseInt($('.selectpicker.selectClass').val());
    var price = parseInt($('.selectpicker.selectSeats').val());
    var total = group * price;
    if(isNaN(total)){
  $('#totalAmount').val('');
} else{
  $('#totalAmount').val('Rs' + total+ "/-");
}

});
$scope.setShow=function(){
  sessionStorage.setItem('cls', document.getElementById('seatCls').value );
  sessionStorage.setItem('nOfS', document.getElementById('noOFSeats').value );
  sessionStorage.setItem('Amt', document.getElementById('totalAmount').value );
  $location.path('/payment');
}

});
