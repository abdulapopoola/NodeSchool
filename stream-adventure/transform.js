var through = require('through2');
var tr = through(function (buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}, function(done){
    done();
});

process.stdin.pipe(tr).pipe(process.stdout)