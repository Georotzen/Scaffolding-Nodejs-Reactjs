'use strict';

var ctlCommon = require('../controllers/ctlCommon');

module.exports = function(app) {

	app.route('/api/common/test')
        .get(ctlCommon.test);		
        
};