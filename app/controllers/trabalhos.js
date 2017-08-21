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

module.exports = function() {

   var controller = {};

   // Retorna todos os trabalhos cadastrados
   controller.listar = function(req, res) {
      res.json(trabalhos);
   }

   // Retorna um trabalho, identificado pelo id
   controller.obterUm = function(req, res) {

      var idTrabalho = req.params.id;

      // Filtra o vetor 'trabalhos', gerando um outro vetor
      // ('selecionados') que contém apenas o trabalho selecionado
      var selecionados = trabalhos.filter(function(trabalho) {
         return trabalho._id == idTrabalho;
      });

      // 'selecionados' é um vetor. Temos que olhar no seu
      // primeiro elemento
      if(selecionados[0]) {
         res.json(selecionados[0]);
      }
      else {
         res.status(404).send('Trabalho não encontrado');
      }

   }

   controller.excluir = function(req, res) {

      var idTrabalho = req.params.id;

      // Filtra o vetor 'trabalho', gerando o vetor 'remanescentes'
      // sem o trabalho excluído
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

   }

   return controller;

}