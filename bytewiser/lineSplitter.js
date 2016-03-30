'use strict';

let fs = require('fs');
let filepath = process.argv[2];

fs.readFile(filepath, function(err, buffer) {
    const newLineCode = '\n'.charCodeAt(0);
    let lastReadIndex = 0;
    let currIndex = 0;
    
    for (let len = buffer.length; currIndex < len; currIndex++) {
        if (buffer[currIndex] === newLineCode) {
            console.log(new Buffer(buffer.slice(lastReadIndex, currIndex)));
            lastReadIndex = currIndex + 1;
        }
    }
    
    console.log(new Buffer(buffer.slice(lastReadIndex, buffer.length - 1)));
});