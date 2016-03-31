'use strict';

process.stdin.on('data', function(buffer){
    var val = new Uint8Array(buffer);
    console.log(JSON.stringify(val)); 
});