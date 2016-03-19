var trumpet = require('trumpet');
var through = require('through2');

var tr = trumpet();
var stream = tr.select('.loud').createStream();

var transform = through(function (buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}, function(done){
    done();
});

stream.pipe(transform).pipe(stream);
process.stdin.pipe(tr).pipe(process.stdout)