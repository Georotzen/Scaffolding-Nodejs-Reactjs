'use strict';

var ctlUser = require('../controllers/ctlUser');

module.exports = function(app) {
    
    app.route('/api/user/check-username/:username')
        .get(ctlUser.checkUsername);
        
    app.route('/api/user/register')
        .post(ctlUser.checkRules, ctlUser.register);

    app.route('/api/user/login')
        .post(ctlUser.login);

    app.route('/api/user/logout')
        .get(ctlUser.requiresLogin, ctlUser.logout);

    app.route('/api/user')
        .get(ctlUser.requiresLogin, ctlUser.find)
        .post(ctlUser.requiresLogin, ctlUser.checkRules, ctlUser.create);

    app.route('/api/user/:id')
        .get(ctlUser.requiresLogin, ctlUser.findById)
        .put(ctlUser.requiresLogin, ctlUser.checkRules, ctlUser.update)
        .delete(ctlUser.requiresLogin, ctlUser.delete);
};