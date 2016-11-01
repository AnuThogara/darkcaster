(function() {

        angular.module('forecastApp')
            .factory('weatherService', weatherService);

        weatherService.$inject = ['$http']; //to get http running from angular axios
        function weatherService($http) { //send services and get services

            var secretToken = {
                secret: "Its a secret"
            };
            var latitude;
            var longitude;
            var service = {};
            service.weatherData = [];
            service.getWeather = getWeather;
            return service;

            function getWeather(latitude, longitude) {
                //get weather from proxy
                latitude = latitude;
                longitude = longitude;
                var config = {
                    headers: secretToken
                };
                var url = '/forecast/' + latitude + ',' + longitude;
                return $http.get(url, config)
                    .then(function(response) {
                            service.weatherData = response.data;
                    });

                        // return $http.get(url, config);
                        //make this call to same domain


                        //  return $http.get('/forecast/29,-82', config);

            }

          }
}());
