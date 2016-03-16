var through = require('through2');
var split = require('split');

var lineNumber = 1;

var tr = through(function(buffer, encoding, next) {
    if (lineNumber % 2 === 0) {
        this.push(buffer.toString().toUpperCase()+'\n');
    } else {
        this.push(buffer.toString().toLowerCase()+'\n');
    }
    lineNumber++;
    next();
});

process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout)