module.exports = function(app) {
   var controller = app.controllers.categorias;

   app.get('/categorias', controller.listar);
   app.get('/categorias/:id', controller.obterUm);
   app.delete('/categorias/:id', controller.excluir);
}