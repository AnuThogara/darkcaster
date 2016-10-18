var express = require('express');
var cors = require('cors');
var server = express();
var logger = require('./middleware/logger.js');
var axios = require('axios');
var apikey = require('./config.js').apikey;

var port = process.env.PORT || 8080;

server.use(express.static(__dirname+'/public'));
server.use(logger);
server.use(cors());
server.get('/', function(request,response){
  response.sendFile('public/html/index.html',{root:__dirname});
});

server.get('/forecast/:latitude,:longitude', function(request, response){
  // response.send("Latitude: " + request.params.latitude + " Longitude: " + request.params.longitude);
  var url ='https://api.darksky.net/forecast/'+ apikey +'/'+ request.params.latitude +','+ request.params.longitude;//url from darksky
  var timeoutConfig ={
  timeout: 2000
};
  axios.get(url, timeoutConfig)

  .then(function(forecast){
    response.send(forecast.data);
  })//when it's successful
  .catch(function(error){
    response.send(error);
  });
});
server.listen(port, function(){
  console.log('now listening on port ..', port);
});
