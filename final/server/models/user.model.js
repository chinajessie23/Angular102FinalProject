'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * User Schema
 */
var UserSchema = new Schema({
  fname: {
    type: String,
    trim: true
      },
  lname: {
    type: String,
    trim: true
      },
  username: {
    type: String,
    trim: true,
    unique: true,
    dropDups: true
  },
   password: {
    type: String,
    trim: true
      },
});

mongoose.model('User', UserSchema);
