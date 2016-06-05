'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * User Schema
 */
var RestSchema = new Schema({
  name: {
    type: String,
    trim: true,
    unique: true
      },
  phone: {
    type: String,
    default: 'not provided',
    trim: true
  },
  rating: {
    type: Number,
    trim: true
  },
  website: {
    type: String,
    trim: true
  },
  dateAdded: {
    type: Date,
    trim: true,
    default: Date.now
  },
  image: {
    type: String,
    trim: true
  },
});

mongoose.model('Rest', RestSchema);
