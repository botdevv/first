var app = angular.module("myApp", ['ngRoute', 'ngResource']);

app.service('httpDataService', function ($http) {

    this.getData = function () {
        return $http({
            method: 'GET',
            url: 'http://ergast.com/api/f1/2022/driverStandings.json'
        })
    }

    this.getData2 = function () {
        return $http({
            method: 'GET',
            url: 'https://run.mocky.io/v3/47fa2915-c86d-4a29-a79e-b75fb7ba9fd6'
        })
    }
})

app.filter('myFormat', function ($filter) {
    return function (x) {
        return $filter('date')(new Date(x), "dd-MM-yyyy");

    };
});

app.directive('title', function () {
    return {
        template: `<h2 id="title">season 2022 - round 12 rankings</h2>`,
        replace: true
    }
})

app.directive('content', function () {
    return {
        templateUrl: "./listDirective.html",
        replace: true,
        scope: {
            x: "=",
            go: "&"
        }
    }
})