'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var UserModel = mongoose.model('User');

/**
 * Signup
 */
exports.addUser = function(req, res) {

  // Init Variables
  var user = new UserModel(req.body);

  // Then save the todo
  user.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      res.json({_id:user._id});
    }
  });
};

exports.getUsers = function(req, res) {
    UserModel.find(null, {name: 1}).exec(function(err, users) {
      if (err) {
        return res.status(400).send({
          message: err
        });
      } else {
        res.json(users);
      }
    });
};

exports.getUser = function(req, res) {
  var username = req.params.username;
  UserModel.findOne({username: username}).exec(function(err, user) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      res.json(user);
    }
  });
};

// exports.updateTodo = function(req, res) {
//   var todo = req.body;
//   ToDoModel.find({_id: todo._id}).exec(function(err, todos) {
//     if (err) {
//       return res.status(400).send({
//         message: err
//       });
//     } else {
//       var match = todos && todos.length && todos[0];
//       match.name = todo.name;
//       match.description = todo.description;
//       match.save(function(err) {
//         if (err) {
//           return res.status(400).send({
//             message: err
//           });
//         } else {
//           res.json({_id:match._id});
//         }
//       });
//     }
//   });
// };
