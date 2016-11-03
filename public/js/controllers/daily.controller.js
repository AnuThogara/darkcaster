(function() {

    angular.module('forecastApp')
        .controller('dailyController', dailyController);

    dailyController.$inject = ['$scope', 'weatherService'];

    function dailyController($scope, weatherService) {
      $scope.weather = weatherService.weatherData;

      $scope.$watch(function() {
              return weatherService.weatherData;

          }, function(newVal, oldVal) {
              $scope.weather = weatherService.weatherData;
          });
    }

}());
