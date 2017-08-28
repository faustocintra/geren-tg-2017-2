var mongoose = require('mongoose');

module.exports = function() {

   var schema = mongoose.Schema({

      descricao: {
         type: String,
         required: true
      }

   });

   return mongoose.model('Categoria', schema);

}