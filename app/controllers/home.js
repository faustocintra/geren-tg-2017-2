module.exports = function() {

   var controller = {}; // Objeto vazio

   controller.index = function(req, res) {
      res.render('index', {nome: "GerenTG"});
   }

   controller.ajuda = function(req, res) {
      // Renderização de view sem variáveis
      res.render('ajuda');
   }

   controller.login = function(req, res) {
      // Renderização de view com mais de uma variável
      res.render('login', {
         nome: 'GerenTG',
         mensagem: 'Informe seus dados para autenticação'
      });
   }

   return controller;

}