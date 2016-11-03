(function() {

    angular.module('forecastApp')
        .controller('hourlyController', hourlyController);

   hourlyController.$inject = ['$scope', 'weatherService'];


   function hourlyController($scope, weatherService) {
     var converHours;
     $scope.hourLat = weatherService.lat;
     $scope.hourLon = weatherService.lon;
     $scope.hourSummary = weatherService.sum;
     $scope.hourHumid = weatherService.humid;
     $scope.hourTemp = weatherService.temp;
     $scope.weather = weatherService.weatherData;

     $scope.$watch(function() {
             return weatherService.weatherData;

         }, function(newVal, oldVal) {
             $scope.weather = weatherService.weatherData;
             $scope.hourLat = weatherService.lat;
             $scope.hourLon = weatherService.lon;
             $scope.hourSummary = weatherService.sum;
             $scope.hourHumid = weatherService.humid;
             $scope.hourTemp = weatherService.temp;
         });
}
}());
