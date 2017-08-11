module.exports = function() {

   var controller = {}; // Objeto vazio

   controller.index = function(req, res) {
      res.render('index', {nome: "GerenTG"});
   }

   return controller;

}