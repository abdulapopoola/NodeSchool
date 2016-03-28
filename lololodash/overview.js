'use strict';

var _ = require('lodash');

var worker = function(orders) {
    var groups = _.groupBy(orders, 'article');

    var results = _.reduce(groups, function(result, value, key) {
        var totalForGroup = _.reduce(value, function(sum, value){
            return sum + value['quantity'];
        }, 0);
        
        result.push({
            article: +key,
            total_orders: totalForGroup
        });        
        
        return result; 
    }, []);

    return _.sortBy(results, 'total_orders').reverse();
};

module.exports = worker;