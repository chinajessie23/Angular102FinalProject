'use strict';

// 
/*
ToDo Routes:

All Requests need to specify a content type of 'application/json'

*/
module.exports = function(app) {
  
  var restController = require('../controllers/rest.controller');

  // PUT request for adding a todo
  app.route('/api/addRest').put(restController.addRest);

  // GET request for all todos
  app.route('/api/getRests').get(restController.getRests);

  // GET request will return the details of the a todo with id ":id"
  // The :id parameter needs to be sent for this request
  app.route('/api/getRestDetails/:id/').get(restController.getRestDetails);

  //POST request for updating a todo.
  // app.route('/api/updateTodo').post(restController.updateTodo);

};