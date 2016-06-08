'use strict';

// 
/*
ToDo Routes:

All Requests need to specify a content type of 'application/json'

*/
module.exports = function(app) {
  
  var userController = require('../controllers/user.controller');

  // PUT request for adding a todo
  app.route('/api/addUser').put(userController.addUser);

  // GET request for all todos
  app.route('/api/getUsers').get(userController.getUsers);

  // GET request will return the details of the a todo with id ":id"
  // The :id parameter needs to be sent for this request
  app.route('/api/getUser/:username/').get(userController.getUser);

  //POST request for updating a todo.
  // app.route('/api/updateTodo').post(restController.updateTodo);

};