var express = require('express');
var consign = require('consign');

//var home = require('../app/routes/home');

module.exports = function() {
   var app = express();

   app.set('port', 3000);
   app.set('ip', '127.0.0.1');

   //app.use(express.static('./public'));

   app.set('view engine', 'ejs');
   app.set('views', './app/views');

   //home(app);

   /*
      Entra no diretório app/, carrega recursivamente
      todos os *.js e "despeja" o resultado dentro
      da variável app
   */
   
   // cwd: change working directory
   consign({cwd: 'app'})
      .include('models')
      .then('controllers')
      .then('routes')
      .into(app);

   return app;
};