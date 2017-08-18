//var Controller = require('../controllers/home');

//var controller = Controller();

module.exports = function(app) {

   var controller = app.controllers.home;

   app.get('/', controller.index);
   app.get('/index', controller.index);
   app.get('/ajuda', controller.ajuda);
   app.get('/login', controller.login);
}