'use strict';

var config = require('./config'),
    express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    passport = require('passport'),
    path = require('path');

module.exports = function() {

  var app = express();

  //cross-domain
  app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
    next();
  });

  //environment
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
  } 

  //parser-data
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(methodOverride());

  //sessions
  app.use(passport.initialize());
  app.use(passport.session());

  //routes
  config.getGlobbedFiles('./api/routes/**/*.js').forEach(function(routePath) {
    require(path.resolve(routePath))(app);
  });

  return app;
};