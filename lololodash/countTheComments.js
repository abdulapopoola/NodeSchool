'use strict';

var _ = require('lodash');

var worker = function(words) {
    var results = [],
        groups = _.groupBy(words, 'username');

    _.forEach(groups, function(count, name){
        results.push({
            username: name,
            comment_count: _.size(count)
        });
    });
    
    return _.sortBy(results, 'comment_count').reverse();
};

module.exports = worker;