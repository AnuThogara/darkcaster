var express = require('express');
var router = express.Router();
var apikey = process.env.APIKEY || require('../config.js').apikey;
var axios = require('axios');
var timeoutConfig = {
    timeout: 2000
};

router.get('/forecast/:latitude,:longitude', function(request, response) {
    var url = buildForecastURL(request.params.latitude, request.params.longitude);

    axios.get(url, timeoutConfig) //get to the url

    .then(function(forecast) {
            response.send(forecast.data);
        }) //when it's successful
        .catch(function(error) {
            response.send(error);
        });
});

module.exports = router;

function buildForecastURL(latitude, longitude) {

    var url = 'https://api.darksky.net/forecast/' + apikey + '/' + latitude + ',' + longitude; //url from darksky, build url and spit to diff url
    return url;
}



// server.get('/forecast/:latitude,:longitude', function(request, response){
//   // response.send("Latitude: " + request.params.latitude + " Longitude: " + request.params.longitude);

// });
