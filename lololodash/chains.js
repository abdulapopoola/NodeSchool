'use strict';

var _ = require('lodash');

var worker = function(words) {
    return _.chain(words)
        .sortBy()
        .map(function(word){
            var word = word.toUpperCase()+'CHAINED';
            return word;
        })
        .values();
};

module.exports = worker;