'use strict';

var _ = require('lodash');

var worker = function(loginObjs) {
    var template = 'Hello <%= name %> (logins: <%= logins %>)';
    
    return _.template(template)({
        name: loginObjs.name,
        logins: loginObjs.login.length
    });
};

module.exports = worker;