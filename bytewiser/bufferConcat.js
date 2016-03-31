'use strict';

let through = require('through2');
let buffers = [];
let transform = through(function (buffer, encoding, next) {
    buffers.push(buffer);
    next();
}, function(done){
    console.log(Buffer.concat(buffers));
    done();
});

process.stdin.pipe(transform);