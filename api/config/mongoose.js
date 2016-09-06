'use strict';

var	config = require('./config'),
    mongoose = require('mongoose'),
    q = require('q'),
    path = require('path');

module.exports = function() {
	mongoose.Promise = q.Promise;
  var db = mongoose.connect(config.db);
  
  config.getGlobbedFiles('./api/models/**/*.js').forEach(function(modelPath) {
		require(path.resolve(modelPath));
  });

  return db;
};
