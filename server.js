var http = require('http');
var express = require('./config/express');

var db = require('./config/database');

// Iniciamos a conexão com o banco de dados
// junto com a aplicação
// Conecta-se ao MongoDB no servidor localhost
// para utilizar o banco de dados geren-tg
db('mongodb://localhost/geren-tg');

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