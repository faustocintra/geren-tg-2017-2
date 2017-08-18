module.exports = function(app) {
   var controller = app.controllers.trabalhos;

   app.get('/trabalhos', controller.listar);
}