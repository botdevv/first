app.controller('list', function ($scope, $location, httpDataService) {

    httpDataService.getData().then(function (response) {
        httpDataService.getData2().then(function (response2) {

            $scope.data = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            $scope.data2 = response2.data;
            myfunction($scope.data2);

            function myfunction(y) {
                for (let i = 0; i < $scope.data.length; i++) {
                    for (let j = 0; j < y.length; j++) {
                        if ($scope.data[i].Constructors[0].constructorId === y[j].constrId) {
                            $scope.data[i].Driver.carinfo = y[j];
                            // storing car data
                        }
                    }
                }
            }

        }, function (error) {
            console.log('error: ', error);
        });

    }, function (error) {
        console.log('error: ', error);
    });
    $scope.go = function (driverId) {
        $location.path('/second/' + driverId);
    };

    $scope.search = function (item) {
        if ($scope.SearchDriver == undefined) {
            return true;
        }
        else {
            if (item.Driver.givenName.toLowerCase().indexOf($scope.SearchDriver.toLowerCase()) != -1
                || item.Driver.familyName.toLowerCase().indexOf($scope.SearchDriver.toLowerCase()) != -1) {
                return true;
            }
        }
        return false;
    }

});
