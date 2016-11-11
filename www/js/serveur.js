var http = require('http');
var url = require("../views/connexion.html");
http.createServer(function(req, res) {
  res.writeHead(200);
  res.end();
  res.url;
  console.log("Node.js server running on port 8080");
}).listen(8080);
