var pgConnector = require('volos-pgsql');
var http = require('http');
var restMap = require('./queryToRestMap');

var profile = {
  username: '<user_name>',
  password: '<password>',
  host: "<host>",
  port: "5432",
  database: "<database>"
};

var pgConnectorObject = new pgConnector.PgConnector({"profile": profile, "restMap": restMap});

var svr = http.createServer(function (req, resp) {
  pgConnectorObject.dispatchRequest(req, resp);
});

svr.listen(9000, function () {
  pgConnectorObject.initializePaths(restMap);
  console.log(pgConnectorObject.applicationName + ' node server is listening');
});