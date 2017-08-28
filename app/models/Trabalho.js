var mongoose = require('mongoose');

module.exports = function() {

   var schema = mongoose.Schema({

      titulo: {
         type: String,
         required: true
      },

      aluno: {
         type: String,
         required: true
      },

      categoria: {
         type: mongoose.Schema.ObjectId,
         ref: 'Categoria',
         required: true
      },

      dataBanca: {
         type: Date
      },

      nota: {
         type: Number
      }

   });

   return mongoose.model('Trabalho', schema);

}