var mongoose = require('mongoose');

module.exports = function(uri) {

   // URI = Universal Resource Identificator
   mongoose.connect(uri, {useMongoClient: true});

   mongoose.connection.on('connected', function() {
      console.log('Mongoose! conectado a ' + uri);
   });

   mongoose.connection.on('disconnected', function() {
      console.log('Mongoose! desconectado de ' + uri);
   });

   mongoose.connection.on('error', function(erro) {
      console.log('Mongoose! Erro de conexão: ' + erro);
   });

   // SIGINT = mensagem do SO para encerrar
   process.on('SIGINT', function() {
      mongoose.connection.close(function() {
         console.log('Mongoose! desconectado por término da aplicação');
         process.exit(0); // Suicida-se; 0 significa saída sem erros
      });
   });

}