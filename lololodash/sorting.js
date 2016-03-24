'use strict';

var _ = require('lodash');

var worker = function(items){
    return _.sortBy(items, function (item) {
        return -item.quantity;
    });
    /**
     * Also works
     * return _.sortBy(collection,"quantity").reverse();
     */
};

module.exports = worker;