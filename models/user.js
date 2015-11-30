'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User;

var userSchema = Schema({
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, select: false },
  displayName: String,
  picture: String,
  github: String
});



User = mongoose.model('User', userSchema);
module.exports = User;