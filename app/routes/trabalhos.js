module.exports = function(app) {
   var controller = app.controllers.trabalhos;

   app.get('/trabalhos', controller.listar);
   app.get('/trabalhos/:id', controller.obterUm);
   app.delete('/trabalhos/:id', controller.excluir);
}