module.exports = function(app) {

   var controller = {};

   var Categoria = app.models.Categoria;

   // Retorna todos os categorias cadastrados
   controller.listar = function(req, res) {
      Categoria.find().exec().then(
         function(categorias) {     // Callback se der certo
            res.json(categorias);
         },
         function(erro) {          // Callback se der errado
            console.error(erro);
            // HTTP 500: erro interno do servidor
            res.status(500).json(erro);
         }
      );   
   }

   // Retorna um categoria, identificado pelo id
   controller.obterUm = function(req, res) {

      var idCategoria = req.params.id;

      Categoria.findById(idCategoria).exec().then(
         function(categoria) {
            if (!categoria) throw new Error('Categoria não encontrado');
            res.json(categoria);
         },
         function(erro) {
            console.error(erro);
            // HTTP 404: não encontrado
            res.status(404).json(erro);
         }
      );

   }

   controller.excluir = function(req, res) {

      var idCategoria = req.params.id;

      // Filtra o vetor 'categoria', gerando o vetor 'remanescentes'
      // sem o categoria excluído
      /*
      var remanescentes = categorias.filter(function(trab) {
         return trab._id != idCategoria;
      });

      // Caso tenha havido exclusão, o vetor 'remanescentes'
      // será menor que o vetor 'categorias'
      if(remanescentes.length < categorias.length) {
         categorias = remanescentes;
         res.status(200).send('Categoria excluído');
      }
      else {
         res.status(404).send('Categoria não encontrado para exclusão');
      }
      */

      Categoria.remove({_id: idCategoria}).exec().then(
         function() {
            res.status(203).end();
         },
         function(erro) {
            console.log(erro);
         }
      );

   }

   return controller;

}