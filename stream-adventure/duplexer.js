var duplexer = require('duplexer2');
var spawn = require('child_process').spawn;

module.exports = function(cmd, args) {
    // spawn the process and return a single stream
    // joining together the stdin and stdout here
    var proc = spawn(cmd, args);
    return duplexer(proc.stdin, proc.stdout);
};