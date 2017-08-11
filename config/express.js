var express = require('express');

module.exports = function() {
   var app = express();

   app.set('port', 3000);
   app.set('ip', '127.0.0.1');

   app.use(express.static('./public'));

   return app;
};