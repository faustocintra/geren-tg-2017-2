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

   controller.listar = function(req, res) {
      res.json(trabalhos);
   }

   return controller;

}