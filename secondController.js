app.controller("second", function ($routeParams, $scope, $location, $http, httpDataService) {

    httpDataService.getData().then(function (response) {
        httpDataService.getData2().then(function (response2) {
            $scope.data = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            $scope.data2 = response2.data;
            myfunction($scope.data2);
            // write here
            function myfunction(y) {
                for (let i = 0; i < $scope.data.length; i++) {
                    for (let j = 0; j < y.length; j++) {
                        if ($scope.data[i].Constructors[0].constructorId === y[j].constrId) {
                            $scope.data[i].Driver.carinfo = y[j]; // storing car data
                        }
                    }
                }
            }

            $scope.x = index($routeParams.driverId);
            function index(y) {
                for (let i = 0; i < $scope.data.length; i++) {
                    if ($scope.data[i].Driver.driverId === y) {
                        $scope.indexValue = parseInt(i);
                        // debugger;
                        if (i == 0) {
                            $scope.backId = $scope.data[i].Driver.driverId;
                            $scope.frontId = $scope.data[i + 1].Driver.driverId;
                        }
                        else if (i == $scope.data.length - 1) {
                            $scope.backId = $scope.data[i - 1].Driver.driverId;
                            $scope.frontId = $scope.data[i].Driver.driverId;
                        }
                        else {
                            $scope.backId = $scope.data[i - 1].Driver.driverId;
                            $scope.frontId = $scope.data[i + 1].Driver.driverId;
                        }
                        return $scope.data[i];
                    }
                }
            }
            // Navigate function
            $scope.navigate = function (path) {
                $location.path('/second/' + path);
            };
            $scope.goHome = function (path) {
                $location.path(path);
            };


        }, function (error) {
            console.log('error: ', error);
        });

    }, function (error) {
        console.log('error: ', error);
    });
});