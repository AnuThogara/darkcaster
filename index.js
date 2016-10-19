var express = require('express');
var server = express();
var logger = require('./middleware/logger.js');
var cors = require('cors');
var authorize = require('./middleware/auth.js');
var indexRouter = require('./router/index.router.js');


var forecastRouter = require('./router/forecast.router.js');
var indexRouter = require('./router/index.router.js');
var port = process.env.PORT || 8080;
//middleware
server.use(express.static(__dirname+'./public'));
server.use(logger);
server.use(cors());

 //runs on local browser
server.use(indexRouter);
 server.use(forecastRouter);
 server.listen(port, function(){
  console.log('now listening on port ..', port);
});
