(function() {

    angular.module('forecastApp')
        .controller('hourlyController', hourlyController);

   hourlyController.$inject = ['$scope', 'weatherService'];

   function hourlyController($scope, weatherService) {
     $scope.hours= getHours(hours, data);
    $scope.getWeather = getWeather;
    $scope.weather = weatherService.weatherData;
  }

}());
