'use strict';

var _ = require('lodash');

var worker = function(items) {
    var categories = {
        'hot': [],
        'warm': []
    };

    var checkTemp = function(temp) {
        return temp >= 19;
    };

    _.forEach(items, function(item /* value */, itemName /*key*/) {
        if (_.every(item, checkTemp)) {
            categories.hot.push(itemName);
        } else if (_.some(item, checkTemp)) {
            categories.warm.push(itemName);
        }
    });

    return categories;
};

module.exports = worker;