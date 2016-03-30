'use strict';

process.stdin.on('data', function(buffer){
    for(let i=0, len = buffer.length; i <len; i++){
        if(buffer[i] === 46){
            buffer.write("!", i);
        }
    }
    console.log(buffer);
});