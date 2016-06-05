'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var RestModel = mongoose.model('Rest');

/**
 * Signup
 */
exports.addRest = function(req, res) {

  // Init Variables
  var rest = new RestModel(req.body);

  // Then save the todo
  rest.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      res.json({_id:rest._id});
    }
  });
};

exports.getRests = function(req, res) {
    RestModel.find(null, {name: 1}).exec(function(err, rests) {
      if (err) {
        return res.status(400).send({
          message: err
        });
      } else {
        res.json(rests);
      }
    });
};

exports.getRestDetails = function(req, res) {
  var id = req.params.id;
  RestModel.findOne({_id: id}).exec(function(err, rest) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      res.json(rest);
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
