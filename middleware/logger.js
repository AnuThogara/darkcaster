function logger(request, response, next){
  var requestDate = new Date();
  var requestMethod = request.method;
  var requestUrl = request.url;
  console.log(requestDate, requestMethod, requestUrl);
  next();
}

module.exports = logger;
