(function() {

    angular.module('forecastApp')
        .controller('HomeController', HomeController);

HomeController.$inject = ['$scope', 'weatherService'];
    function HomeController($scope, weatherService) {

$scope.getWeather = getWeather;
 function getWeather(latitude, longitude){
weatherService.getWeather(latitude, longitude)
 .then(function(response){
  $scope.weather = response.data;
 })
 }

    }

}());
