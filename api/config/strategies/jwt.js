'use strict';

var config = require('../config'),
    passport = require('passport'),
    jwtStrategy = require('passport-jwt').Strategy,
    extractJwt = require('passport-jwt').ExtractJwt,
    userModel = require('mongoose').model('user');

module.exports = function() {
  passport.use(new jwtStrategy({
    jwtFromRequest: extractJwt.fromAuthHeader(),
    secretOrKey: config.sessionSecret,
    ignoreExpiration: true
  }, function(jwt_payload, done) {
    userModel.findById(jwt_payload._doc._id)
    .select('-salt -password')
    .exec()
    .then(function(user){
        if (!user) {
            return done(null, false);
        } 
        done(null, user);
    })
    .catch(function(err){
        done(err, false);
    });                
  }));
};