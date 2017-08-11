var http = require('http');
var express = require('./config/express');

var app = express();

/*http.createServer(
   function(req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Este é um servidor implementado em Node.js');
   }
).listen(3000, '127.0.0.1');*/

http.createServer(app).listen(app.get('port'), app.get('ip'),
   function() {
      console.log('Express Server escutando na porta ' + 
         app.get('port'));
   }
); 