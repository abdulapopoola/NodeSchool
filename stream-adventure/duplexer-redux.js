var duplexer = require('duplexer2');
var through = require('through2');

module.exports = function(counter) {
    // return a duplex stream to count countries on the writable side
    // and pass through `counter` on the readable side
    var count = {};
    var tr = through(function(buffer, encoding, next) {
        count[buf.country] = count[buf.country] ? count[buf.country] + 1 : 1;
        next();
    }, function() {
        counter.setCounts(count);
    });

    return duplexer(tr, counter);
};