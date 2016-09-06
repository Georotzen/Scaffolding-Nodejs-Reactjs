'use strict';

var _this = this,
    mongoose = require('mongoose'),
    userModel = mongoose.model('user'),
    passport = require('passport'),
    jwt = require('jsonwebtoken');

exports.checkRules = function(req, res, next){
  var user = new userModel(req.body);
  userModel.find({ $and: [{ _id: { $ne: user._id } }, { email: new RegExp('^' + user.email + '$', "i") } ]}).exec()
  .then(function(data){
    if (data.length > 0){
      return res.status(400).send({ message: 'Username already exist' });
    }
    next();
  })
  .catch(function(err){
    res.status(500).send(err);
  });
}

exports.checkUsername = function(req, res, next){
  userModel.find({ email: new RegExp('^' + req.param('username') + '$', "i") }).exec()
  .then(function(data){
    if (data.length > 0) return res.json({ user: data });
    res.json({ user: null });
  })
  .catch(function(err){
    res.status(500).send(err);
  });
}

exports.register = function(req, res, next) {    
  var user = new userModel(req.body);
  user.provider = process.env.SESSION_PASSPORT_STRATEGY;

  user.save()
  .then(function(response){
    res.json(response);
  })
  .catch(function(err){
    res.status(500).send(err);
  });
};

exports.login = function(req, res, next){
  userModel.findOne({ email: req.body.email }).exec()
  .then(function(response){
    if (!response) {
        return res.status(400).send({ message: 'User not found' });
    } 
    if (!response.authenticate(req.body.password)) {
        return res.status(400).send({ message: 'Incorrect password' });
    }

    var token = jwt.sign(response, config.sessionSecret, {
        expiresIn: parseInt(process.env.SESSION_TIME_SECONDS)
    });
    
    res.json({ token: 'JWT '+token });
  })
  .catch(function(err){
    res.status(500).send(err);
  });
};

exports.logout = function(req, res) {
    req.logout();
    res.json({ message: 'Closed sesion' });
};

exports.find = function(req, res) {
  userModel.find({}, '-salt -password')
  .sort({created: 1})
  .exec()
  .then(function(response){
    res.json(response);
  })
  .catch(function(err){
    res.status(500).send(err);
  });
};

exports.create = function(req, res, next) {    
  var user = new userModel(req.body);
  user.provider = process.env.SESSION_PASSPORT_STRATEGY;

  user.save()
  .then(function(response){
    res.json(response);
  })
  .catch(function(err){
    res.status(500).send(err);
  });
};

exports.findById = function(req, res, next, id) {
  userModel.findById(req.param('id'))
  .select('-salt -password')
  .exec()
  .then(function(response){
    res.json(response);
  })
  .catch(function(err){
    res.status(500).send(err);
  });
};

exports.update = function(req, res, next) {    
  userModel.findById(req.param('id')).exec()
  .then(function(response){
    response.modified = Date.now();
    res.json(response);
  })
  .catch(function(err){
    res.status(500).send(err);
  });
};

exports.delete = function(req, res, next){
  var user = req.user;
  user.remove()
  .then(function(response){
    res.json(response);
  })
  .catch(function(err){
    res.status(500).send(err);
  });
};  

exports.requiresLogin = function(req, res, next) {
  passport.authenticate('jwt', { session : false }, function(err, data, info){
    if (err) {
      return res.status(500).send(err);
    }
    if (!data) {
      return res.status(400).send({ message: 'Incorrect token' });
    }       
    next();
  })(req, res, next);
};