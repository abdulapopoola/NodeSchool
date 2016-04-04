'use strict';

let slice = Array.prototype.slice;

function logger(namespace) {
    return function() {
        let args = slice.call(arguments);
        return console.log.apply(null, [namespace].concat(args));
    };
}

module.exports = logger;