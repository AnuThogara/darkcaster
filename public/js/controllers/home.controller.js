(function() {

    angular.module('forecastApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'weatherService'];

    function HomeController($scope, weatherService) {
        $scope.getWeather = getWeather;
        $scope.weather = weatherService.weatherData;

        $scope.$watch(function() {
                return weatherService.weatherData;
            },
            function(newVal, oldVal) {
                $scope.weather = weatherService.weatherData;

            });
        // $scope.getWeather = getWeather;
        function getWeather(latitude, longitude) {
          weatherService.getWeather(latitude, longitude);


        }

    }

}());
