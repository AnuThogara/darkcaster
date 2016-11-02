(function() {

    angular.module('forecastApp')
        .controller('dailyController', dailyController);

    dailyController.$inject = ['$scope', 'weatherService'];

    function dailyController($scope, weatherService) {
        $scope.getWeather = getWeather;
        $scope.weather = weatherService.weatherData;

        function dailyData(latitude, longitude) {
            //weatherService.getWeather(latitude, longitude);
            return localStorage.weatherData;
        }
    }

}());
