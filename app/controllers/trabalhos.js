/*
var trabalhos = [
   {
      '_id': 1,
      'titulo': 'Sistema de gerenciamento de gerentes',
      'aluno': 'Josué Pucci Bartocci'
   },
   {
      '_id': 2,
      'titulo': 'A segurança da informação nas organizações',
      'aluno': 'Zenilda Petraglia Engler'
   },
   {
      '_id': 3,
      'titulo': 'Sistema de gerenciamento de loja de confecções',
      'aluno': 'Yago Brigagão Palermo'      
   }
];
*/

module.exports = function(app) {

   var controller = {};

   var Trabalho = app.models.Trabalho;

   // Retorna todos os trabalhos cadastrados
   controller.listar = function(req, res) {
      Trabalho.find().populate('categoria').exec().then(
         function(trabalhos) {     // Callback se der certo
            res.json(trabalhos);
         },
         function(erro) {          // Callback se der errado
            console.error(erro);
            // HTTP 500: erro interno do servidor
            res.status(500).json(erro);
         }
      );   
   }

   // Retorna um trabalho, identificado pelo id
   controller.obterUm = function(req, res) {

      var idTrabalho = req.params.id;

      Trabalho.findById(idTrabalho).exec().then(
         function(trabalho) {
            if (!trabalho) throw new Error('Trabalho não encontrado');
            res.json(trabalho);
         },
         function(erro) {
            console.error(erro);
            // HTTP 404: não encontrado
            res.status(404).json(erro);
         }
      );

   }

   controller.novo = function(req, res) {

      Trabalho.create(req.body).then(
         function(trabalho) {
            // HTTP 201: criado            
            res.status(201).json(trabalho);
         },
         function(erro) {
            console.error(erro);
            // HTTP 500: erro interno do servidor
            res.status(500).json(erro);
         }
      )

   }

   controller.atualizar = function(req, res) {

      var idTrabalho = req.body._id;

      Trabalho.findByIdAndUpdate(idTrabalho, req.body).then(
         function(trabalho) {
            res.status(200).json(trabalho);
         },
         function(erro) {
            console.error(erro);
            res.status(404).json('Trabalho não encontrado para atualizar');
         }
      )
   }

   controller.excluir = function(req, res) {

      var idTrabalho = req.params.id;

      // Filtra o vetor 'trabalho', gerando o vetor 'remanescentes'
      // sem o trabalho excluído
      /*
      var remanescentes = trabalhos.filter(function(trab) {
         return trab._id != idTrabalho;
      });

      // Caso tenha havido exclusão, o vetor 'remanescentes'
      // será menor que o vetor 'trabalhos'
      if(remanescentes.length < trabalhos.length) {
         trabalhos = remanescentes;
         res.status(200).send('Trabalho excluído');
      }
      else {
         res.status(404).send('Trabalho não encontrado para exclusão');
      }
      */

      Trabalho.remove({_id: idTrabalho}).exec().then(
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