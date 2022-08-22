app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider

        .when('/', {
            templateUrl: 'list.html',
            controller: 'list'
        })
        .when('/second/:driverId', {
            templateUrl: './second.html',
            controller: 'second'
        })

}]);