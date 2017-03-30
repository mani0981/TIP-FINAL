
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})
		.when('/booking', {
			templateUrl: 'views/booking.html',
			controller: 'BookingController'
		})
		.when('/movies', {
			templateUrl: 'views/movies.html',
			controller: 'MovieController',
			resolve: {
			logincheck: checkLoggedin
			}
		})
		.when('/cities', {
			templateUrl: 'views/cities.html',
			controller: 'cityController',
			resolve: {
			logincheck: checkLoggedin
			}
		})
		.when('/theatre', {
			templateUrl: 'views/theatre.html',
			controller: 'TheatreController',
			resolve: {
			logincheck: checkLoggedin
			}
		})
		.when('/showtime', {
			templateUrl:'views/showtime.html',
			controller: 'ShowtimeController',
			resolve: {
			logincheck: checkLoggedin
			}
		})
		.when('/Details',{
			templateUrl: 'views/Details.html',
			controller: 'DetailsController'
		})

		.when('/seats', {
			templateUrl: 'views/seats.html',
			controller: 'seatsController'
		})
		.when('/payment',{
			templateUrl:'views/payment.html',
			controller: 'paymentController'
		})
		.when('/login',{
			templateUrl: 'views/login.html',
			controller: 'LoginController'
		})
		.when('/register',{
			templateUrl: 'views/register.html',
			controller: 'RegisterController'
		})

		.when('/mapping', {
			templateUrl:'views/mapping.html',
			controller:'MappingController'
		})
		.when('/last',{
			templateUrl:'views/last.html',
			controller: 'lastController'
		});

	$locationProvider.html5Mode(true);
}]);
var checkLoggedin = function($q, $timeout, $http, $location, $rootScope)
{
    var deferred = $q.defer();

    $http.get('/loggedin').success(function(user)
    {
        $rootScope.errorMessage = null;
        // User is Authenticated
        if (user !== '0')
            deferred.resolve();
        // User is Not Authenticated
        else
        {
            $rootScope.errorMessage = 'You need to log in.';
            deferred.reject();
            $location.url('/login');
        }
    });

    return deferred.promise;
}
